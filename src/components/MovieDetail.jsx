import React from "react";

const MovieDetail = () => {
  return (
    <>
      <div className="flex">
        <div
          style={{
            flex: 1,
            borderRight: "1px solid #0000004D",
            borderTopRightRadius: "45px",
            borderBottomRightRadius: "45px",
          }}
        >
          <div className="logo flex items-center">
            <img src={`/img/logo.png`} className="logo p-5" />
            <span className="font-bold text-xl">MovieBox</span>
          </div>

          <nav className="mt-20 mb-40">
            <ul className="text-center flex flex-col gap-10">
              <li>Home</li>
              <li className="bg-[#BE123C1A] py-5">Movies</li>
              <li>TV Series</li>
              <li>Upcoming</li>
            </ul>
          </nav>

          <div
            className="m-5 p-3 pt-10"
            style={{
              border: "1px solid #BE123C",
              borderRadius: "20px",
              backgroundColor: "rgba(248, 231, 235, .4)",
            }}
          >
            <p className="text-[#333] font-bold">
              Play movie quizes and earn free tickets
            </p>

            <span className="inline-block text-[#666] my-3 text-sm">
              50k people are playing now
            </span>

            <button
              className="px-5 py-2 mb-2 text-white text-black text-sm"
              style={{
                borderColor: "#000",
                borderRadius: "30px",
                backgroundColor: "rgba(190,18,60,.2)",
              }}
            >
              Start Playing
            </button>
          </div>

          <button className="w-full m-auto mt-10">Log out</button>
        </div>

        <div
          className="grid pl-5"
          style={{
            flex: 6,
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
          }}
        >
          <div
            className="video-banner mt-10"
            style={{
              backgroundImage: "url('/img/trailer.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              minHeight: "400px",
              gridArea: "1 / 1 / 2 / 3",
            }}
          ></div>

          <div
            className="movie-details flex flex-col gap-7 p-10"
            style={{ gridArea: "2 / 1 / 3 / 2" }}
          >
            <div className="main-details flex">
              <p className="mr-10 font-bold">
                Top Gun: Maverick • 2022 • PG-13 • 2h 10m
              </p>

              <span className="mr-5">Action</span>
              <span>Drama</span>
            </div>

            <p className="movie-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              maiores dignissimos neque voluptatibus accusantium esse sit eius
              quibusdam eaque eos! Nisi dolorum explicabo accusamus veniam sed,
              voluptatem consequuntur porro odio aspernatur debitis, assumenda
              iusto ab non quisquam reprehenderit delectus voluptatum, maiores
              aut? Nisi qui illo, voluptates commodi hic aliquam nesciunt.
            </p>

            <ul>
              <li>
                Director:{" "}
                <span className="text-[#BE123C]">Joseph Kosinski</span>
              </li>
              <li className="my-4">
                Writers:{" "}
                <span className="text-[#BE123C]">
                  Jim Cash, Jack Epps Jr, Peter Craig
                </span>
              </li>
              <li>
                Stars:{" "}
                <span className="text-[#BE123C]">
                  Tom Cruise, Jennifer Connelly, Miles Teller
                </span>
              </li>
            </ul>

            <div className="button-group">
              <button className="px-5 py-2 text-white bg-[#BE123C] rounded-lg">
                Top rated movie #65
              </button>

              <button className="px-5 py-2 text-white bg-white text-black border-solid border-2 w-80">
                Awards 9 nominations
              </button>
            </div>
          </div>

          <div
            className="more-info ml-auto p-10"
            style={{ gridArea: "2 / 2 / 3 / 3" }}
          >
            <div className="ratings flex items-center justify-end">
              <img src={`/img/star.svg`} />
              8.5 | 350k
            </div>

            <div className="flex flex-col mt-5">
              <button className="px-5 py-2 text-white bg-[#BE123C] rounded-lg flex justify-center">
                <img src={"/img/tickets.png"} className="mr-2" />
                See Showtimes
              </button>

              <button className="px-5 py-2 bg-[#BE123C1A] rounded-lg mt-2 mb-5 flex justify-center">
                <img src={"/img/list.png"} className="mr-2" />
                More Watch Options
              </button>
            </div>

            <div className="best-movies">
              <img src={`/img/popular.png`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
