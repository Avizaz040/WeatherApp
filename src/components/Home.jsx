import React from "react";
import cloudImage from "../assets/cloud.png";
import clearSky from "../assets/clear-sky.png";

function Home() {
  return (
    <div className="relative w-full h-full pt-32 bg-gradient-to-b from-[#fff] to-[#7bcce3] flex flex-col items-center justify-start overflow-hidden">
      <img
        src={cloudImage}
        alt="cloud Image"
        className="absolute -top-52 -right-52 z-50"
      />
      <div className="w-1/6 h-8 bg-[#f2f0f0] rounded-full text-center content-center text-xs text-gray-500 flex flex-row justify-center items-center mb-8">
        <p>
          See weather like never before,
          <a href="#" className="font-semibold">
            View
          </a>
        </p>
        <img src={clearSky} alt="clear sky" />
      </div>
      <div className="w-3/5 text-center mb-4 z-20">
        <p className="text-7xl font-normal leading-normal">
          The only Competitor to the Weather Channel.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        <button className="bg-[#c2f2ff] hover:bg-[#52d4ff] text-xl font-semibold text-[#1a9bd6] px-8 py-2 rounded-full border border-[#52d4ff]">
          See Demo
        </button>
        <p className="text-xl underline underline-offset-4 text-gray-400 cursor-pointer">
          Start at Github
        </p>
      </div>
      <img
        src={cloudImage}
        alt="cloud Image"
        className="absolute left-24 top-52"
      />
      <div className="pb-4">
        <p className="mt-8 text-sm text-[#36a5c9] font-semibold">
          See this cool demo
        </p>
      </div>

      <div className="w-2/4 h-86 bg-gradient-to-b from-[#178dad] to-[#badee8] rounded-3xl flex flex-col justify-start items-center p-5 mb-8">
        <div className=" flex flex-row justify-center items-center gap-2 text-xs bg-white rounded-full px-6 py-2 mb-6">
          <p>Home</p>
          <p className="font-semibold underline underline-offset-2">Weather</p>
          <p>Privacy</p>
        </div>
        <div className="w-3/5 h-15 text-basic bg-[#ffffff48] rounded-full text-xs text-[#f2f0f0] px-4 py-2 border border-[#d7d6d6] mb-8">
          Search your location
        </div>
        <div className="mb-8">
          <p className="text-8xl text-white font-semibold">
            06<sup>o</sup>C
          </p>
          <p className="text-3xl text-white font-semibold">
            42.8<sup>o</sup>F Darjeeling
          </p>
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-4">
          <div className="h-12 w-1/4 bg-[#c3e1eb] rounded-full text-left content-center px-4 text-gray-400 font-semibold text-sm">Humidity</div>
          <input type="text" className="h-12 w-2/4 bg-[#c3e1eb] rounded-full text-left content-center px-4 text-gray-400 font-semibold text-sm outline-none " disabled/>
        </div>
      </div>
      <img src={cloudImage} alt="cloud Image" className="absolute -bottom-40 -right-40"/>
    </div>
  );
}

export default Home;
