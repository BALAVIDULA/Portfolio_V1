import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Increase duration to 2000ms for slower animations
      easing: "ease-in-out", // Add easing for smooth animations
    });
  }, []);

  return (
    <div
      name="about"
      className="w-full pt-24 md:pt-32 min-h-screen text-white bg-gradient-to-b from-black via-black-400 to-gray-800"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2 md:pb-6">
          <p
            className="text-4xl font-bold inline border-b-4 border-gray-500 text-white"
            data-aos="fade-up"
          >
            About Me
          </p>
        </div>

        <ul className="list-none text-xl text-white mt-8 leading-relaxed space-y-6">
          <li className="flex items-start" data-aos="fade-right">
            <span className="mr-3 text-yellow-100">&#9733;</span>
            <p>
              I am driven by a passion for applying{" "}
              <span className="glow-text">AI and machine learning</span> to
              tackle real-world challenges. Over the past{" "}
              <span className="glow-text">1.5 years</span>, I've focused on
              mastering{" "}
              <span className="glow-text">Python, Machine Learning, NLP,</span>{" "}
              and <span className="glow-text">Data Analytics</span>.
            </p>
          </li>

          <li className="flex items-start" data-aos="fade-left">
            <span className="mr-3 text-yellow-100">&#9733;</span>
            <p>
              Beyond technical skills, I thrive on creating impactful solutions.
              My professional journey includes enriching experiences at{" "}
              <span className="glow-text">Ernst & Young (EY)</span>,{" "}
              <span className="glow-text">
                National Institute of Technology (NIT) - Silchar
              </span>
              , <span className="glow-text">Live Apps</span>, and{" "}
              <span className="glow-text">SkyScanner</span>. Projects such as{" "}
              <span className="glow-text">
                developing health monitoring models
              </span>{" "}
              and{" "}
              <span className="glow-text">forecasting financial insights</span>{" "}
              have honed my expertise.
            </p>
          </li>

          <li className="flex items-start" data-aos="fade-right">
            <span className="mr-3 text-yellow-100">&#9733;</span>
            <p>
              In my roles as <span className="glow-text">Secretary</span> and{" "}
              <span className="glow-text">Joint Secretary</span> of the AI and
              Machine Learning Association, I led initiatives fostering
              collaboration and innovation. Additionally, in the Women
              Empowerment Cell, I've served as{" "}
              <span className="glow-text">Joint Secretary</span> and now guide
              as <span className="glow-text">Club Advisor</span>, championing
              initiatives that promote empowerment and inclusion.
            </p>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .glow-text {
          color: #f7f6d5;
          text-shadow: 0 0 1px #ffff99, 0 0 3px #ffff99;
        }
      `}</style>
    </div>
  );
};

export default About;
