import React, { useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      imgUrl: "/img/poster-1.png",
      title: "Stranger Things",
      releaseDate: "USA, 2016 - Current",
      ratings: "86.0 / 100",
      stat: "97%",
      categories: "Action, Adventure, Horror",
    },
    {
      id: 2,
      imgUrl: "/img/poster-2.png",
      title: "Batman Begins",
      releaseDate: "USA, 2005",
      ratings: "82.0 / 100",
      stat: "70%",
      categories: "Action, Adventure",
    },
    {
      id: 3,
      imgUrl: "/img/poster-3.png",
      title: "Spider-Man: Into the Spider Verse",
      releaseDate: "USA, 2018",
      ratings: "84.0 / 100",
      stat: "87%",
      categories: "Animation, Action, Adventure",
    },
    {
      id: 4,
      imgUrl: "/img/poster-4.png",
      title: "Dunkirk",
      releaseDate: "USA, 2017",
      ratings: "78.0 / 100",
      stat: "94%",
      categories: "Action, Drama, History",
    },
  ]);

  return (
    <div className="grid gap-10 xl:gap-20 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:grid-rows-3 mt-10">
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <div className="movie-poster">
              <img src={movie.imgUrl} className="w-full" />
            </div>

            <div className="movie-details">
              <span className="inline-block text-slate-500 my-2 text-sm">
                {movie.releaseDate}
              </span>

              <h1 className="font-bold text-xl">{movie.title}</h1>

              <div className="flex justify-between my-2">
                <div className="flex">
                  <img src={`/img/imdb.png`} className="object-contain mr-3" />
                  <span className="text-sm">{movie.ratings}</span>
                </div>

                <div className="flex">
                  <img src={`/img/apple.png`} className="object-contain mr-3" />
                  <span className="text-sm">{movie.stat}</span>
                </div>
              </div>

              <div className="categories text-slate-500">
                {movie.categories}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
