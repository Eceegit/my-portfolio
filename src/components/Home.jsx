import React from "react";
import HeroImage from "../assets/hero-image.jpeg";
import { HiArrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name=""
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto 
      flex flex-col items-center justify-center 
      h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-white text-4xl sm:text-7xl font-bold">
            I'm a Frontend Developer
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1 year of experience in building and designing websites.
            Currently, I love to develop web applications using technologies
            like React and Tailwind CSS
          </p>
          <div>
            <button className="group flex items-center w-fit px-6 py-4 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white cursor-pointer ">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRight size={25} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="heroImage"
            className="rounded-2xl w-2/3 md:w-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
