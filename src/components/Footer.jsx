import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="container px-5 lg:px-20 mx-auto">
        <div className="flex flex-col items-center">
          <div className="social-links flex items-center justify-evenly w-full sm:w-4/12 mt-10 mx-auto">
            <img src={`/img/fa-brands_facebook-square.png`} className="mr-3" />
            <img src={`/img/fa-brands_instagram.png`} className="mr-3" />
            <img src={`/img/fa-brands_twitter.png`} className="mr-3" />
            <img src={`/img/fa-brands_youtube.png`} className="mr-3" />
          </div>

          <div className="footer-links flex flex-col lg:flex-row justify-around text-center gap-5 mt-8 w-1/2">
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy and Policy</a>
            <a href="#">Press Room</a>
          </div>

          <p className="copyright mt-8">
            © 2021 MovieBox by Adriana Eka Prayudha{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
