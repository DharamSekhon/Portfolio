import Header from "./Components/Header";
import { BsFillDisplayFill } from "react-icons/bs";
import { PiSmileyFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNode } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaLink } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { Fullscreen } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

// import "./app.css";

function App() {
  return (
    <>
      <section
        id="home"
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: 'url("bg1.jpg")', width: Fullscreen }}
      >
        <title>My Portfolio</title>
        <Header />
        <div className="grid md:grid-cols-2 grid-cols-1 ">
          <div className="mt-[180px] ml-10">
            <div>
              <div>
                <div className=" text-white text-[2.3rem] md:text-[5rem]">
                  <p className="">
                    Hi, I'm <br></br>
                    Dharampreet Singh
                  </p>
                </div>

                <div className="grid-flow-row mt-6">
                  <p className="text-gray-300 text-md md:text-3xl">
                    A passionate{" "}
                    <span className=" text-green-500">
                      {" "}
                      &lt;Web Developer/&gt;
                    </span>{" "}
                    creating user friendly websites.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center align-middle mt-10 md:mt-[140px]">
            <img
              className="md:w-[500px] w-[200px] relative "
              src="Untitled__1.png"
            />
            <h1 className="text-white text-md md:text-xl md:font-semibold flex items-center border-2 border-r-green-500 border-t-green-500 border-b-green-200 border-l-0 absolute md:px-10 md:py-3 px-5 py-1 rounded-lg ml-[10rem] md:ml-[13rem] md:mt-[8rem] mt-10 backdrop-filter backdrop-blur-2xl">
              <PiSmileyFill className="text-green-500 mr-5 text-md md:text-3xl" />{" "}
              Best Quailty
            </h1>
            <h1 className="flex items-center textt-md md:text-xl md:font-semibold text-white border-2 border-l-green-500 border-t-green-500 border-b-green-200 border-r-0 absolute mt-[8rem] md:mt-[18rem] md:mr-[19rem] mr-[12rem] px-5 py-1 md:px-10 md:py-3 rounded-lg backdrop-filter backdrop-blur-2xl ">
              <BsFillDisplayFill className="text-green-500 mr-5 text-md md:text-2xl" />
              Responsive
            </h1>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-cover pt-[100px] bg-center h-screen text-white flex md:flex-row flex-col  "
        style={{ backgroundImage: 'url("bg2.jpg")' }}
      >
        <div className="w-[40%] md:ml-[9rem] ml-[4.5rem] mt-[1rem] md:mt-[5rem]">
          <img
            src="pic.png"
            className="w-[17rem] md:ml-6 ml-[3.9rem] relative border-2 border-green-400 rounded-full backdrop-filter backdrop-blur-sm"
          />
          <div className="absolute border-2 rounded-lg text-lg md:text-xl text-center flex flex-col items-center px-[3rem] p-2 border-green-400 backdrop-filter backdrop-blur-sm">
            <h1>Dharampreet Singh Sekhon </h1>
            <a href="https://github.com/DharamSekhon" target="_blank">
              <FaGithub className="text-xl md:text-3xl" />
            </a>
          </div>
        </div>
        <div className="w-[60%] flex flex-col gap-2 mt-[7rem] ml-4 md:ml-0  text-gray-300">
          <div className="p-2 border-2 text-md md:text-xl text-center w-[8rem] py-1 rounded-md border-gray-800 backdrop-filter backdrop-blur-sm">
            About me
          </div>
          <div className="w-[40rem]">
            <h1 className="text-xl md:text-4xl text-green-600 font-semibold w-[50%] md:w-[70%]">
              Transforming visions into exceptional portfolios
            </h1>
            <p className="text-md md:text-xl mt-3 w-[55%] md:w-full text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              unde reprehenderit minus nisi voluptatem soluta perferendis
              eligendi laboriosam, eos, a sed molestiae nemo? Quasi eaque
              distinctio exercitationem laudantium, magnam placeat.
            </p>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="bg-cover pt-[100px] bg-center h-screen text-white flex flex-col items-center "
        style={{ backgroundImage: 'url("bg.jpg")' }}
      >
        <div className="mt-3 md:mt-[6rem] p-2 border-2 text-md md:text-xl text-center w-[8rem] py-1 rounded-md border-gray-800 backdrop-filter backdrop-blur-sm">
          Skills
        </div>
        <div className="text-lg md:text-3xl text-green-600 font-semibold mt-5 text-center">
          The skills, tools and technologies <br></br> I am really good at:
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-10  mt-10 ">
          <div className="flex flex-col items-center ">
            <div>
              <SiJavascript className="text-3xl md:text-5xl text-[#f7df1e]" />{" "}
            </div>
            <p>Javascript</p>
          </div>
          <div className="flex flex-col items-center ">
            <FaReact className="text-3xl md:text-5xl text-[#87CEEB]" />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center ">
            <FaNode className="text-3xl md:text-5xl text-[#68A063]" />
            <p>Node</p>
          </div>
          <div className="flex flex-col items-center ">
            <SiMongodb className="text-3xl md:text-5xl text-[#3FA037]" />
            <p>Mongo Db</p>
          </div>
          <div className="flex flex-col items-center ">
            <SiExpress className="text-3xl md:text-5xl" />
            <p>Express</p>
          </div>

          <div className="flex flex-col items-center ">
            <SiNpm className="text-3xl md:text-5xl text-[#CB3837]" />
            <p>Npm</p>
          </div>
          <div className="flex flex-col items-center ">
            <SiTailwindcss className="text-3xl md:text-5xl text-[#4299e1]" />
            <p>Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center ">
            <SiMysql className="text-3xl md:text-5xl text-[#007CFF]" />
            <p>MySQL</p>
          </div>
          <div className="flex flex-col items-center ">
            <BiLogoPostgresql className="text-3xl md:text-5xl text-[#336791]" />
            <p>PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center ">
            <FaGitAlt className="text-3xl md:text-5xl text-[#F1502F]" />
            <p>Git</p>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="bg-cover pt-[100px] bg-center h-screen text-white flex flex-col items-center "
        style={{ backgroundImage: 'url("bg3.jpg")' }}
      >
        <div className="p-2 mt-0 md:mt-9 border-2 text-md md:text-xl text-center w-[8rem] py-1 rounded-md border-gray-800 backdrop-filter backdrop-blur-sm">
          Work
        </div>
        <div className="text-xl md:text-3xl text-green-600 font-semibold mt-5 text-center">
          Things I've built so far
        </div>
        <div className="grid grid-cols-2 m-10 gap-[6rem]">
          <div className="w-[10rem] md:w-[17rem] border-2 md:h-full h-[100%]  border-gray-600 rounded-xl">
            <img src="proj1.png" className="rounded-t-xl" />
            <div className="p-4">
              <h1 className="text-md md:text-xl  text-gray-200 font-semibold">
                Heal Sync
              </h1>
              <p className="text-justify text-xs md:text-sm font-medium text-gray-300 mt-2">
                Heal Sync is a online doctor appointment booking website along
                with online laboratory and medical supplies.
              </p>
              <div className="md:flex hidden justify-center gap-5 mt-4">
                <p className="p-2  text-gray-300 bg-gray-800 text-sm text-center  px-8 py-1 rounded-md  backdrop-filter backdrop-blur-sm">
                  React
                </p>
                <p className="p-2  text-gray-300 bg-gray-800 text-sm text-center px-5 py-1 rounded-md  backdrop-filter backdrop-blur-sm">
                  Tailwind CSS
                </p>
              </div>
              <div className="flex md:flex-row gap-2 md:gap-0 flex-col justify-between mt-3 text-sm">
                <a
                  href="https://heal-sync.vercel.app/"
                  target="blank"
                  className="flex items-center  hover:text-green-500"
                >
                  <FaLink className="mr-1" />
                  Live Demo
                </a>
                <a
                  href="https://github.com/DharamSekhon/my-heal-sync"
                  target="blank1"
                  className="flex items-center text-md hover:text-green-500"
                >
                  <FaGithub className="mr-1" />
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="w-[10rem] md:w-[17rem] border-2 md:h-full h-[100%]  border-gray-600 rounded-xl">
            <img src="proj2.png" className="rounded-t-xl" />
            <div className="p-4">
              <h1 className="text-md md:text-xl  text-gray-200 font-semibold">
                Ecommerce
              </h1>
              <p className="text-justify text-xs md:text-sm font-medium text-gray-300 mt-2">
                Ecommerce is a online platform from where users can shop their
                favorite gadgets online with quick online payment.
              </p>
              <div className="md:flex hidden justify-center gap-5 mt-4">
                <p className="p-2  text-gray-300 bg-gray-800 text-sm text-center  px-8 py-1 rounded-md  backdrop-filter backdrop-blur-sm">
                  React
                </p>
                <p className="p-2  text-gray-300 bg-gray-800 text-sm text-center px-5 py-1 rounded-md  backdrop-filter backdrop-blur-sm">
                  Tailwind CSS
                </p>
              </div>
              <div className="flex md:flex-row gap-2 md:gap-0 flex-col justify-between mt-3 text-sm">
                <a
                  href="https://my-ecommerce-front-tawny.vercel.app/"
                  target="blank3"
                  className="flex items-center  hover:text-green-500"
                >
                  <FaLink className="mr-1" />
                  Live Demo
                </a>
                <a
                  href="https://github.com/DharamSekhon/my-ecommerce-front"
                  target="blank4"
                  className="flex items-center text-md hover:text-green-500"
                >
                  <FaGithub className="mr-1" />
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* <div className="w-[17rem] border-2 border-gray-600 rounded-xl">
            <img src="proj2.png" className="rounded-t-xl" />
            <div className="p-4">
            <h1 className="text-xl  text-gray-200 font-semibold">Ecommerce</h1>
            <p className="text-justify text-sm font-medium text-gray-300 mt-2">Ecommerce is a online platform from where users can shop their favorite gadgets online with quick online payment.</p>
            <div className="flex justify-center gap-5 mt-4">
              <p className="p-2  text-gray-300 bg-gray-800 text-sm text-center px-8 py-1 rounded-md  backdrop-filter backdrop-blur-sm">React</p>
              <p className="p-2  text-gray-300 bg-gray-800 text-sm text-center px-5 py-1 rounded-md  backdrop-filter backdrop-blur-sm">Tailwind CSS</p>
            </div>
            <div className="flex justify-between mt-3">
            <a href="https://my-ecommerce-front-tawny.vercel.app/" target="blank" className="flex items-center hover:text-green-500 text-md"><FaLink className="mr-1"/>Live Demo</a>
            <a href="https://github.com/DharamSekhon/my-ecommerce-front" target="blank1" className="flex items-center hover:text-green-500 text-md"><FaGithub className="mr-1"/>Source Code</a>
            </div>
            </div>
          </div> */}
        </div>
      </section>

      <section
        id="contact"
        className="bg-cover pt-[100px] bg-center h-screen text-white flex flex-col items-center "
        style={{ backgroundImage: 'url("b.jpg")' }}
      >
        <div className="p-2 mt-[5rem] md:mt-[5rem] mb-4 md:mb-5 border-2 text-lg md:text-xl text-center w-[8rem] py-1 rounded-md border-gray-800 backdrop-filter backdrop-blur-sm">
          Contact me
        </div>
        <a
          className="text-md md:text-3xl flex items-center border-2 hover:border-green-500 p-2 rounded-lg font-semibold mt-5 hover:text-green-500 text-center"
          href="mailto:sekhondharam@gmail.com"
        >
          <CiMail className="text-md md:text-3xl mr-2" />
          sekhondharam@gmail.com
        </a>
      </section>
    </>
  );
}

export default App;
