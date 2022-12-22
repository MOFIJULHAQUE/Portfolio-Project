import React from "react";
import FooterImg from "../assets/logo.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowDown,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <img src={FooterImg} alt="Haque" />
          <h2>Mofijul Haque</h2>

          <p>Don't judge a book by it's cover</p>
        </div>
        <aside>
          <h2>Social Media</h2>
          <article>
            <a href="https://www.youtube.com/@letsbecomeacoder5302">
              <AiFillYoutube />
            </a>

            <a href="https://www.instagram.com/mofijul_haque/">
              <AiFillInstagram />
            </a>

            <a href="https://github.com/MOFIJULHAQUE">
              <AiFillGithub />
            </a>
          </article>
        </aside>
        <a href="#home">
          <AiOutlineArrowDown />
        </a>
      </footer>
    </>
  );
};

export default Footer;
