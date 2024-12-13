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
    <div className="w-full min-h-screen bg-gradient-to-t from-[#fff] to-[#189dc2] px-8 py-28 flex flex-col justify-start items-center text-center">
      <div className="w-2/5 h-14 flex flex-row placeholder:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8 bg-[#8bcee0]">
      <input
        type="text"
        placeholder="Search your location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-4/5 h-14 px-8 placeholder:text-white rounded-full outline-none bg-[#8bcee0]"
      />
      <button
        onClick={() => setQuery(search)} // Set query state to trigger API call
        className="w-1/5 h-14 px-4 py-2 bg-transparent text-white rounded-full hover:bg-blue-500 mb-8"
      >
        Search
      </button>
      </div>
      
      <p className="text-8xl font-semibold leading-normal text-white">
        {weatherData.temp_c}<span>&#176;</span>C
      </p>
      <p className="text-3xl font-semibold leading-3 text-white">
        {weatherData.temp_f}<span>&#176;</span>F <span>{weatherData.name}/{weatherData.country}</span>
      </p>
      <div className="w-2/5 flex flex-row gap-4 justify-between items-center mt-12">
        <div className="w-1/2 h-64 flex flex-col justify-start items-left gap-4 bg-gradient-to-b from-[#87c4d4] to-[#a8d3e0] rounded-2xl p-6">
          <p className="w-full text-sm font-semibold text-gray-500 text-left mb-8">
            Humidity
          </p>
          <p className="w-full text-8xl font-semibold text-gray-500 text-start">{weatherData.humidity}<span>%</span>
          </p>
        </div>
        <div className="w-1/2 h-64 flex flex-col justify-start items-left gap-4 bg-gradient-to-b from-[#87c4d4] to-[#a8d3e0] rounded-2xl p-6">
          <p className="w-full text-sm font-semibold text-gray-500 text-left mb-8">Wind</p>
          <p className="w-full text-8xl font-semibold text-gray-500 text-start">
            {Math.round(weatherData.wind_kph)}<span className="text-5xl">km/h</span>
          </p>
          <p className="w-full text-base font-semibold text-gray-400 text-start">{weatherData.wind_mph}<span>mi/h</span></p>
        </div>
      </div>

      <div className="w-2/5 flex flex-row gap-4 justify-between items-center mt-4">
        <div className="w-4/6 h-64 flex flex-col justify-start items-left gap-4 bg-gradient-to-b from-[#87c4d4] to-[#a8d3e0] rounded-2xl p-6">
          <p className="w-full text-sm font-semibold text-gray-500 text-left mb-8">
            Rain
          </p>
          <p className="w-full text-8xl font-semibold text-gray-500 text-start">{weatherData.precip_in}<span className="text-5xl">inch</span>
          </p>
        </div>
        <div className="w-2/6 h-64 flex flex-col justify-start items-left gap-4 bg-gradient-to-b from-[#87c4d4] to-[#a8d3e0] rounded-2xl p-6">
          <p className="w-full text-sm font-semibold text-gray-500 text-left mb-8">Feels like</p>
          <p className="w-full text-8xl font-semibold text-gray-500 text-center">
           {Math.round(weatherData.feelslike_c)}
          </p>
        </div>
      </div>
      
      <div className="w-2/5 flex flex-row gap-4 justify-between items-center mt-4">
        <div className="w-full h-64 flex flex-col justify-start items-left gap-4 bg-gradient-to-b from-[#87c4d4] to-[#a8d3e0] rounded-2xl p-6">
          <p className="w-full text-sm font-semibold text-gray-500 text-left mb-8">
            AQI
          </p>
          <p className="w-full text-8xl font-semibold text-gray-500 text-start">{Math.round(weatherData.pm2_5)}<span className="text-5xl">µg/m³</span>
          </p>
          <p className={`w-full text-base font-semibold ${aqiStatus().color} text-start`}>{aqiStatus().status}</p>
        </div>
      </div>
      
    </div>
  );
}

export default Weather;
