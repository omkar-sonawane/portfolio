import "./App.css";
import Porfile from "./assets/dp.jpeg";
import Project1 from "./assets/calculator_pro1.png";
import Project2 from "./assets/quiz_pro2.png";
import Project3 from "./assets/weather_pro3.png";
import Project4 from "./assets/todo_pro4.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Github from "./assets/github.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";
import Skills from "./skills/Skills"
import About from "./about/About";
import CTA from "./CTA";
import header from "./assets/header.svg"

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return () => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div className="max-w-5xl m-auto relative">
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}   left-0 right-0 top-0 z-20`} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Omkar Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-10 mt-5">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white cursor-pointer">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white cursor-pointer">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-14 sm:pt-15 flex flex-col sm:flex-row gap-10 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-6xl">Hello, I'm Omkar,</h2>
              <div>
                <h2 id="web" className="font-bold text-4xl mt-2 gradiant-text from to-blue-200 to-cyan-1000">Web developer... </h2>
              </div>
              <div>
                <p className="mt-8 mb-4 text-gray-400">
                  I'm a Web Developer who likes to craft solid and scalable Front-end products with great user experience
                  {/* Turning vision into Reality with code and Design bringing ideas to real life products */}
                </p>
                <button id="cv" className="px-6 py-4 mt-5 bg-gradient-to-t from-blue-500 rounded-xl to-cyan-500 hover:from-blue-700 hover:to-cyan-500 ">

                  <CTA />
                </button>
              </div>
            </div>
            <div className="relative">

              <img id="dis_img" src={header} className="relative  w-[280px]  sm:w-[650px] " />
            </div>
          </div>
        </section>

        <section id="about">
          <center><About /></center>
        </section>

        {/* Projects section */}

        {/* Technoglies section */}

        <div div className="container m-auto px-4 sm:py-12 " id="skill">


          <center><Skills /></center>

        </div>

        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <center><h2 className="text-2xl font-semibold">Projects</h2></center>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div id="box" className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Calculator App
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Developed a web-based calculator  to handle user input, perform
                  calculations, and update the display dynamically
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://oibsip-lemon.vercel.app/" target="_blank">
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/omkar-sonawane/OIBSIP/tree/main/calculator" target="_blank">
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Online Quiz App
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Developed a web-based quiz system to access and evaluate
                  user’s knowledge on various topics
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://online-quize-two.vercel.app/" target="_blank">
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/omkar-sonawane/online_quize" target="_blank">
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Live Weather App
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Developed a web-based weather application that provides real time weather information for a specified location
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://weather-app-eta-ten-72.vercel.app/" target="_blank">
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/omkar-sonawane/Weather_App" target="_blank">
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  To-Do App
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for The Venus project. HTML5, CSS3
                  (SCSS)
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://to-do-jade-eta.vercel.app/" target="_blank">
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/omkar-sonawane/OIBSIP/tree/main/To_Do_App" target="_blank">
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional skills section */}




      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">© 2024 Omkar Sonawane | All rights reserved. </p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li id="fb">
                <a href="https://github.com/omkar-sonawane" target="_blank">
                  <img src={Github} className="w-5" />
                </a>
              </li>
              <li id="linked" >
                <a href="https://www.linkedin.com/in/omkar-sonawane333/" target="_blank" >
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li id="insta">
                <a href="https://www.instagram.com/omkar_sonawane_333/?next=%2F" target="_blank">
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0, 0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}

export default App;
