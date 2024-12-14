import React, {useState, useEffect} from "react";

function Weather() {
  const[weatherData, getWeatherData] = useState({
    current:{
    temp_c:0,
    temp_f:0,
    name:"",
    country:"",
    humidity:0,
    wind_kph:0,
    wind_mph:0,
    precip_in:0,
    feelslike_c:0,
    pm2_5:0,
  },
  })
  const [search, setSearch] = useState("Kolkata");
  const [query, setQuery] = useState("Kolkata");
async function getWeatherReport() {

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ad603215e0564d17b7b162610240512&q=${query}&aqi=yes`);
 
  const data = await response.json();
  getWeatherData({
    temp_c: data.current.temp_c,
    temp_f: data.current.temp_f,
    name: data.location.name,
    country: data.location.country,
    humidity: data.current.humidity,
    wind_kph: data.current.wind_kph,
    wind_mph: data.current.wind_mph,
    precip_in: data.current.precip_in,
    feelslike_c: data.current.feelslike_c,
    pm2_5: data.current.air_quality.pm2_5,
  });
  console.log(data);
}
useEffect(() => {getWeatherReport()},[query]);

const aqiStatus = () => {
  if (weatherData.pm2_5 >= 0 && weatherData.pm2_5 <= 12) {
    return { status: "Good", color: "text-green-500" };
  } else if (weatherData.pm2_5 > 12 && weatherData.pm2_5 <= 35) {
    return { status: "Moderate", color: "text-yellow-500" };
  } else if (weatherData.pm2_5 > 35 && weatherData.pm2_5 <= 55) {
    return { status: "Unhealthy for Sensitive Groups", color: "text-orange-500" };
  } else if (weatherData.pm2_5 > 55 && weatherData.pm2_5 <= 125) {
    return { status: "Unhealthy", color: "text-red-500" };
  } else if (weatherData.pm2_5 > 125 && weatherData.pm2_5 <= 225) {
    return { status: "Very Unhealthy", color: "text-red-600" };
  } else {
    return { status: "Hazardous", color: "text-red-800" };
  }
};

return (
  <div className="w-full min-h-screen bg-gradient-to-t from-[#fff] to-[#189dc2]  px-4 md:px-8 py-32 md:py-32 flex flex-col justify-start items-center text-center">
    {/* Search Bar */}
    <div className="w-full md:w-3/5 lg:w-2/5 h-14 flex flex-row placeholder:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8 bg-[#8bcee0]">
      <input
        type="text"
        placeholder="Search your location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-4/5 h-full px-4 md:px-8 placeholder:text-white rounded-full outline-none bg-[#8bcee0] text-sm md:text-base"
      />
      <button
        onClick={() => setQuery(search)} // Set query state to trigger API call
        className="w-1/5 h-full px-2 md:px-4 py-2 bg-transparent text-white rounded-r-full hover:bg-[#30a8c98f] text-center text-sm md:text-base"
      >
        Search
      </button>
    </div>

    {/* Temperature and Location */}
    <p className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-normal text-white">
      {weatherData.temp_c}
      <span>&#176;</span>C
    </p>
    <p className="text-lg md:text-2xl lg:text-3xl font-semibold leading-6 text-white mt-2">
      {weatherData.temp_f}
      <span>&#176;</span>F <span>{weatherData.name}/{weatherData.country}</span>
    </p>

    {/* Weather Stats */}
    <div className="w-full md:w-3/5 lg:w-2/5 grid grid-cols-2 md:grid-cols-2 gap-4 mt-12">
      {/* Humidity */}
      <div className="h-48 md:h-64 flex flex-col justify-start items-left gap-4 bg-gradient-to-b from-[#87c4d4] to-[#a8d3e0] rounded-2xl p-6">
        <p className="h-1/5 text-sm font-semibold text-gray-500 text-left mb-4">
          Humidity
        </p>
        <p className="h-4/5 md:h-2/3 text-6xl md:text-[5rem] font-semibold text-gray-500 text-left">
          {weatherData.humidity}
          <span>%</span>
        </p>
      </div>

      {/* Wind */}
      <div className="h-48 md:h-64 flex flex-col justify-start items-left gap-4 bg-gradient-to-b from-[#87c4d4] to-[#a8d3e0] rounded-2xl p-6">
        <p className="h-1/4 text-sm font-semibold text-gray-500 text-left mb-4">Wind</p>
        <p className="h-2/4 text-6xl md:text-[5rem] font-semibold text-gray-500 text-start">
          {Math.round(weatherData.wind_kph)}
          <span className="text-2xl md:text-3xl">km/h</span>
        </p>
        <p className="h-1/4 text-sm md:text-base font-semibold text-gray-400 text-start">
          {weatherData.wind_mph}
          <span>mi/h</span>
        </p>
      </div>
    </div>

    <div className="w-full md:w-3/5 lg:w-2/5 flex flex-row justify-center align-middle gap-4 mt-4">
      {/* Rain */}
      <div className="h-48 md:h-64 w-full flex flex-col justify-start items-left gap-4 bg-gradient-to-b from-[#87c4d4] to-[#a8d3e0] rounded-2xl p-6">
        <p className="h-1/3 text-sm font-semibold text-gray-500 text-left mb-4">Rain</p>
        <p className="h-2/3 text-4xl md:text-[5rem] font-semibold text-gray-500 text-left">
          {weatherData.precip_in}
          <span className="text-2xl md:text-5xl">inch</span>
        </p>
      </div>

      {/* Feels Like */}
      <div className="h-48 md:h-64  flex flex-col justify-start items-left gap-4 bg-gradient-to-b from-[#87c4d4] to-[#a8d3e0] rounded-2xl p-6 col-span-1">
        <p className="h-1/3 text-sm font-semibold text-gray-500 text-left mb-4">Feels like</p>
        <p className="h-2/3 text-4xl md:text-[5rem] font-semibold text-gray-500 text-left">
          {Math.round(weatherData.feelslike_c)}
        </p>
      </div>
    </div>

    {/* AQI Section */}
    <div className="w-full md:w-3/5 lg:w-2/5 mt-4">
      <div className="h-48 md:h-64 flex flex-col justify-start items-left gap-4 bg-gradient-to-b from-[#87c4d4] to-[#a8d3e0] rounded-2xl p-6">
        <p className="text-sm font-semibold text-gray-500 text-left mb-4">AQI</p>
        <p className="text-6xl md:text-8xl font-semibold text-gray-500 text-start">
          {Math.round(weatherData.pm2_5)}
          <span className="text-2xl md:text-5xl">µg/m³</span>
        </p>
        <p
          className={`text-sm md:text-base font-semibold ${aqiStatus().color} text-start`}
        >
          {aqiStatus().status}
        </p>
      </div>
    </div>
  </div>
);
}

export default Weather;