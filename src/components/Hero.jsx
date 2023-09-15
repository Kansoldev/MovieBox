import React from "react";
import "../hero.css";

const Hero = () => {
  return (
    <>
      <section
        className="hero-area"
        style={{
          backgroundImage: "url(/img/hero-image.jpg)",
        }}
      >
        <div className="container px-5 lg:px-20 mx-auto">
          <div className="hero-content flex flex-col items-start gap-y-4 text-white lg:w-[350px]">
            <h1 className="hero-title font-bold text-[40px]">
              John Wick 3 : Parabellum
            </h1>

            <div className="min-[450px]:flex">
              <div className="flex">
                <img src={`/img/imdb.png`} className="object-contain mr-3" />
                <span>86.0 / 100</span>
              </div>

              <div className="flex mt-5 min-[450px]:mt-0 min-[450px]:ml-5">
                <img src={`/img/apple.png`} className="object-contain mr-3" />
                <span>97%</span>
              </div>
            </div>

            <p className="hero-description font-normal">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>

            <button className="flex items-center px-5 py-2 text-white bg-[#BE123C] uppercase rounded-lg">
              <img src={`/img/play.svg`} className="mr-3" />
              Watch Trailer
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
