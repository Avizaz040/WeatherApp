import React from "react";
import cloudImage from "../assets/cloud.png";
import clearSky from "../assets/clear-sky.png";

function Home() {
  return (
    <div className="relative w-full min-h-screen pt-32 bg-gradient-to-b from-[#fff] to-[#7bcce3] flex flex-col items-center justify-start overflow-hidden">
      {/* Background Cloud Image */}
      <img
        src={cloudImage}
        alt="cloud Image"
        className="absolute -top-20 md:-top-28 lg:-top-48 -right-16 md:-right-28 lg:-right-48 z-40 w-[200px] md:w-[300px] lg:w-[500px]"
      />

      {/* Weather View Promo */}
      <div className="w-4/5 md:w-1/3 lg:w-1/4 h-12 bg-[#f2f0f0] rounded-full text-center flex items-center justify-center text-xs text-gray-500 mb-8 px-4">
        <p className="truncate">
          See weather like never before,{" "}
          <a href="#" className="font-semibold">
            View
          </a>
        </p>
        <img src={clearSky} alt="clear sky" className="ml-2 w-6 h-6" />
      </div>

      {/* Heading */}
      <div className="w-4/5 md:w-3/5 text-center mb-4 z-20">
        <p className="text-3xl md:text-5xl lg:text-7xl font-normal leading-snug">
          The only Competitor to the Weather Channel.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <button className="bg-[#c2f2ff] hover:bg-[#52d4ff] text-lg md:text-xl font-semibold text-[#1a9bd6] px-6 md:px-8 py-2 rounded-full border border-[#52d4ff] z-50">
          See Demo
        </button>
        <p className="text-base md:text-xl underline underline-offset-4 text-gray-400 cursor-pointer z-50">
          Start at Github
        </p>
      </div>

      {/* Floating Cloud Image */}
      <img
        src={cloudImage}
        alt="cloud Image"
        className="absolute -left-16 md:-left-8 lg:left-32 top-52 md:top-72 lg:top-40 w-[200px] md:w-[300px] lg:w-[500px]"
      />

      {/* Cool Demo Section */}
      <div className="pb-4">
        <p className="mt-8 text-sm text-[#36a5c9] font-semibold">
          See this cool demo
        </p>
      </div>

      {/* Weather Card */}
      <div className="w-4/5 md:w-3/5 lg:w-3/6 bg-gradient-to-b from-[#178dad] to-[#badee8] rounded-3xl flex flex-col justify-start items-center p-5 mb-8 shadow-lg">
        {/* Navigation Links */}
        <div className="flex flex-row justify-center items-center gap-4 text-xs bg-white rounded-full px-6 py-2 mb-6">
          <p className="cursor-pointer">Home</p>
          <p className="font-semibold underline underline-offset-2 cursor-pointer">
            Weather
          </p>
          <p className="cursor-pointer">Privacy</p>
        </div>

        {/* Search Input */}
        <div className="w-full md:w-3/5 text-left bg-[#ffffff48] rounded-full text-xs text-[#f2f0f0] px-4 py-2 border border-[#d7d6d6] mb-8">
          Search your location
        </div>

        {/* Temperature Info */}
        <div className="mb-8 text-center">
          <p className="text-5xl md:text-7xl lg:text-8xl text-white font-semibold">
            06<sup>o</sup>C
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-white font-semibold">
            42.8<sup>o</sup>F Darjeeling
          </p>
        </div>

        {/* Humidity Section */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="h-12 w-full md:w-1/4 bg-[#c3e1eb] rounded-full flex items-center px-4 text-gray-400 font-semibold text-sm">
            Humidity
          </div>
          <input
            type="text"
            className="h-12 w-full md:w-2/4 bg-[#c3e1eb] rounded-full px-4 text-gray-400 font-semibold text-sm outline-none"
            disabled
          />
        </div>
      </div>

      {/* Bottom Cloud Image */}
      <img
        src={cloudImage}
        alt="cloud Image"
        className="absolute -bottom-20 md:-bottom-40 lg:-bottom-48 -right-20 md:-right-40 lg:-right-16 w-[200px] md:w-[500px]"
      />
    </div>
  );
}

export default Home;
