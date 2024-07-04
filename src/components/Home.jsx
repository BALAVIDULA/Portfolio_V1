import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation"; // Import TypeAnimation correctly

const Home = () => {
  return (
    <div
      name="home"
      className="pt-24 md:pt-32 w-full bg-gradient-to-b from-gray-800 via-black-400 to-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:mr-8 mb-8 md:mb-24">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white whitespace-nowrap">
            I'm Bala Vidula
            <br />
            <TypeAnimation
              sequence={[
                "AI Engineer,",
                1000,
                "ML Engineer,",
                1000,
                "and",
                1000,
                "Data Scientist.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2.5xl md:text-5xl text-gradient-to-r from-cyan-100 to-blue-800"
              style={{
                backgroundImage: "linear-gradient(to right, #00B4DB, #0083B0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            />
          </h2>

          <br></br>

          <p
            className="text-gray-500 py-4 max-w-md"
            style={{ color: "white", fontSize: "18px" }}
          >
            A passionate engineer, leveraging AI and machine learning to
            innovate and solve real-world challenges. My skills encompass
            <span
              style={{
                color: "#1976D2",
                marginRight: "4px",
                marginLeft: "4px",
              }}
            >
              Python
            </span>
            ,
            <span
              style={{
                color: "#1976D2",
                marginRight: "4px",
                marginLeft: "4px",
              }}
            >
              Machine Learning
            </span>
            ,
            <span
              style={{
                color: "#1976D2",
                marginRight: "4px",
                marginLeft: "4px",
              }}
            >
              NLP
            </span>
            , and
            <span style={{ color: "#1976D2", marginLeft: "4px" }}>
              Data Analytics
            </span>
            . I bring over 1.5 years of hands-on experience in AI and Data
            Analytics.
            <br />
            <br />
            Explore my projects, experiences, and journey in the world of AI and
            machine learning here, and chat with my interactive chatbot for
            deeper insights!
          </p>

          <br></br>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="md:mt-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-2/3" // Reduced image size
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
