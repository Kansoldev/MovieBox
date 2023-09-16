import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWVjNzNjYjg3Yzg0MGFhMjI2YTcxMGE0ZWExYTBkNSIsInN1YiI6IjY1MDIyMGQ0ZGI0ZWQ2MTAzNjNmYTQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3-JSCK_uZ1a-zwT4LbWQtFgPEe5Vm72oNnF6jo73hNk",
    },
  };

  const options2 = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWVjNzNjYjg3Yzg0MGFhMjI2YTcxMGE0ZWExYTBkNSIsInN1YiI6IjY1MDIyMGQ0ZGI0ZWQ2MTAzNjNmYTQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3-JSCK_uZ1a-zwT4LbWQtFgPEe5Vm72oNnF6jo73hNk",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results.slice(0, 10));
      })
      .catch((err) => console.error(err));

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options2)
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((err) => console.error(err));
  }, []);

  function getGenres(arrVal) {
    let genreArr = [];

    genres.forEach((genre, index) => {
      if (arrVal.indexOf(genre.id) !== -1) {
        genreArr.push(genres[index].name);
      }
    });

    return genreArr.join(", ");
  }

  return (
    <div className="grid gap-10 xl:gap-20 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:grid-rows-3 mt-10">
      {movies.map((movie, index) => {
        return (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <div className="card" data-testid="movie-card">
              <div className="movie-poster">
                <img
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                  className="w-full"
                  date-testid="movie-poster"
                />
              </div>

              <div className="movie-details">
                <span
                  className="inline-block text-slate-500 my-2 text-sm"
                  data-testid="movie-release-date"
                >
                  USA, {new Date(movie.release_date).getFullYear()}
                </span>

                <h1 className="font-bold text-xl" data-testid="movie-title">
                  {movie.title}
                </h1>

                <div className="flex justify-between my-2">
                  <div className="flex">
                    <img
                      src={`/img/imdb.png`}
                      className="object-contain mr-3"
                    />
                    <span className="text-sm">
                      {movie.vote_average * 10} / 100
                    </span>
                  </div>

                  <div className="flex">
                    <img
                      src={`/img/apple.png`}
                      className="object-contain mr-3"
                    />
                    <span className="text-sm">97%</span>
                  </div>
                </div>

                <div className="categories text-slate-500">
                  {getGenres(movie.genre_ids)}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MovieList;
