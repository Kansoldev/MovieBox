import React from "react";
import MovieList from "../MovieList";

const Movies = () => {
  return (
    <section className="mt-10">
      <div className="container px-5 lg:px-20 mx-auto">
        <div className="flex justify-between">
          <h2 className="font-bold text-3xl">Featured Movies</h2>
          <p>See more &raquo; </p>
        </div>

        <MovieList />
      </div>
    </section>
  );
};

export default Movies;
