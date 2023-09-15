import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full z-10">
      <div className="container mx-auto p-5 lg:px-20">
        <nav className="flex items-center justify-between">
          <a href="/" className="logo flex items-center">
            <img src={`/img/logo.png`} />
            <span
              style={{
                display: "inline-block",
                color: "#fff",
                fontSize: 23,
                marginLeft: 10,
              }}
            >
              MovieBox
            </span>
          </a>

          <div className="search-bar relative hidden min-[650px]:block">
            <input
              type="search"
              name=""
              placeholder="What do you want to watch?"
              id=""
              className="lg:w-[450px]"
              style={{
                border: "2px solid #D1D5DB",
                background: "transparent",
                padding: 7,
                borderRadius: "10px",
              }}
            />

            <img
              src={`/img/search.svg`}
              className="mr-3 absolute top-[13px] right-[3px]"
            />
          </div>

          <div className="flex menu">
            <button
              style={{
                padding: "8px 15px",
                color: "#fff",
                fontWeight: 700,
              }}
            >
              Sign in
            </button>

            <img
              src={`/img/menu.svg`}
              className="menu-icon ml-5 hidden min-[450px]:block"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
