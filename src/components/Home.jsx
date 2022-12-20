import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import my_image from ".././assets/myimage.png";

//
const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientCount = () => {
    animate(0, 10, {
      duration: 2,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };

  const animationProjectsCount = () => {
    animate(0, 85, {
      duration: 2,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <>
      <div id="home">
        <section>
          <div>
            <motion.h1 {...animations.h1}>
              Hi, I am <br /> Mofijul Haque
            </motion.h1>

            <Typewriter
              options={{
                strings: ["A Front End Developer", "A Creator"],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "typewriterpara",
              }}
            />

            <div>
              <a href="mailto:mofijulhoque994@gmail.com">Hire Me</a>
              <a href="#work">
                Projects <BsArrowUpRight />
              </a>
            </div>
            <article>
              <p>
                +
                <motion.span
                  whileInView={animationClientCount}
                  ref={clientCount}
                ></motion.span>
              </p>
              <span>Clients Worlwide</span>
            </article>

            <aside>
              <article>
                <p>
                  +  <motion.span
                  whileInView={animationProjectsCount }
                  ref={projectCount}
                ></motion.span>
                </p>
                <span>Projects Done</span>
              </article>

              {/* here with the help of data-special we can access it in CSS  */}
              <article data-special>
                <p>Contact</p>
                <span>mofijulhoque995@gmail.com</span>
              </article>
            </aside>
          </div>
        </section>
        <section>
          <img src={my_image} alt="Mofijul Haque" />
        </section>
        <BsChevronDown />
      </div>
    </>
  );
};

export default Home;
