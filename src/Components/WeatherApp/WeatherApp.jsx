// import React, {useState} from 'react'
// import './WeatherApp.css'
// import search_icon from '../Assets/search.png'
// import clear_icon from '../Assets/clear.png'
// import rain_icon from '../Assets/rain.png'
// import cloud_icon from '../Assets/cloud.png'
// import drizzle_icon from '../Assets/drizzle.png'
// import humidity_icon from '../Assets/humidity.png'
// import snow_icon from '../Assets/snow.png'
// import visibility_icon from '../Assets/visibility.png'
// import wind_speed_icon from '../Assets/wind_speed.png'
// import clear_columbia_icon from '../Assets/clear_columbia.png'
// import rain_columbia_icon from '../Assets/rain_columbia.png'
// import cloud_columbia_icon from '../Assets/cloud_columbia.png'
// import snow_columbia_icon from '../Assets/snow_columbia.png'
// import drizzle_columbia_icon from '../Assets/drizzle_columbia.png'
// import suntset_icon from '../Assets/sunset_columbia.png'
// import wind_icon from '../Assets/wind.png'


// const WeatherApp = () => {

//     let api_key ="345b0a3851e93148bd0c9677cb8103c8";

//     const[wicon,setWicon] = useState(cloud_icon);
//     const search = async() => {
//             const element = document.getElementsByClassName("cityInput");
//             if(element[0].value==="")
//             {
//                 return 0;
//             }
//             let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
//             let response = await  fetch(url);
//             let data = await response.json();
//             const humidity = document.getElementsByClassName("humidity-percent");
//             const wind = document.getElementsByClassName("wind-rate");
//             const temprature = document.getElementsByClassName("weather-temp");
//             const location = document.getElementsByClassName("weather-location");

//             humidity[0].innerHTML = data.main.humidity+"%";
//             wind[0].innerHTML = Math.floor(data.wind.speed)+"km/h";
//             temprature[0].innerHTML = Math.floor(data.main.temp)+"°C";
//             location[0].innerHTML = data.name;

//             if(data.weather[0].icon==="01d" ||data.weather[0].icon==="01n")
//             {
//                 setWicon(clear_icon);
//             }
//             else if(data.weather[0].icon==="02d" ||data.weather[0].icon==="02n")
//             {
//                 setWicon(cloud_icon)
//             }
//             else if(data.weather[0].icon==="03d" ||data.weather[0].icon==="03n")
//             {
//                 setWicon(drizzle_icon)
//             }
//             else if(data.weather[0].icon==="04d" ||data.weather[0].icon==="04n")
//             {
//                 setWicon(drizzle_icon)
//             }
//             else if(data.weather[0].icon==="09d" ||data.weather[0].icon==="09n")
//             {
//                 setWicon(rain_icon)
//             }
//             else if(data.weather[0].icon==="10d" ||data.weather[0].icon==="10n")
//             {
//                 setWicon(rain_icon)
//             }
//             else if(data.weather[0].icon==="13d" ||data.weather[0].icon==="13n")
//             {
//                 setWicon(snow_icon)
//             }
//             else
//             {
//                 setWicon(clear_icon);
//             }
//     }

//     return (
//         <div className="container">
//             <div className="top-bar">
//                 <input type="text" className="cityInput" placeholder='Search' />
//                 <div classname="search-icon" onClick={()=>{search()}}>
//                     <img src={search_icon} alt="" />
//                 </div>
//             </div>
//             <div className="weather-image">
//                 <img src={wicon} alt="" />
//             </div>
//             <div className="weather-temp">24°C</div>
//             <div className="weather-location">London</div>
//             <div className="data-container">
//                 <div className="elements">
//                     <img src={humidity_icon} alt="" className="icon" />
//                     <div className="data">
//                         <div className="Humidity-percent">64%</div>
//                         <div className="text">Humidity</div>
//                     </div>
//                 </div>
//                 <div className="elements">
//                     <img src={wind_speed_icon} alt="" className="icon" />
//                     <div className="data">
//                         <div className="wind-rate">18 km/h</div>
//                         <div className="text">Wind Speed</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default WeatherApp

// import React, { useState, useEffect } from 'react';
// import './WeatherApp.css';
// import search_icon from '../Assets/search.png';
// import clear_icon from '../Assets/clear.png';
// import rain_icon from '../Assets/rain.png';
// import cloud_icon from '../Assets/cloud.png';
// import drizzle_icon from '../Assets/drizzle.png';
// import humidity_icon from '../Assets/humidity.png';
// import snow_icon from '../Assets/snow.png';
// import wind_speed_icon from '../Assets/wind_speed.png';
// import broken_clouds_icon from '../Assets/broken_clouds.png';
// import cloudy_icon from '../Assets/cloudy.png';
// import storm_icon from '../Assets/storm.png';

// const WeatherApp = () => {
//     const [city, setCity] = useState('London'); // Default city
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [weatherData, setWeatherData] = useState(null);

//     const api_key = "345b0a3851e93148bd0c9677cb8103c8";

//     const getWeatherIcon = (iconCode) => {
//         switch(iconCode) {
//             case "01d":
//             case "01n":
//                 return clear_icon;
//             case "02d":
//             case "02n":
//                 return cloud_icon;
//             case "03d":
//             case "03n":
//                 return cloudy_icon;
//             case "04d":
//             case "04n":
//                 return broken_clouds_icon;
//             case "09d":
//             case "09n":
//                 return drizzle_icon;
//             case "10d":
//             case "10n":
//                 return rain_icon;
//             case "11d":
//             case "11n":
//                 return storm_icon;
//             case "13d":
//             case "13n":
//                 return snow_icon;
//             default:
//                 return clear_icon;
//         }
//     };

//     useEffect(() => {
//         fetchWeather(city); // Fetch weather for the default city on load
//     }, []); // Empty dependency array to run only once on mount

//     const fetchWeather = async (city) => {
//         if (!city) return;
//         setLoading(true);
//         setError('');
//         try {
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;
//             const response = await fetch(url);
//             const data = await response.json();
//             if (!response.ok) throw new Error(data.message || "Unable to fetch weather.");
//             setWeatherData({
//                 temp: Math.floor(data.main.temp),
//                 humidity: data.main.humidity,
//                 windSpeed: Math.floor(data.wind.speed),
//                 icon: getWeatherIcon(data.weather[0].icon),
//                 location: data.name
//             });
//         } catch (error) {
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const search = () => fetchWeather(city);

//     return (
//         <div className="container">
//             <div className="top-bar">
//                 <input 
//                     type="text" 
//                     className="cityInput" 
//                     placeholder='Search' 
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                 />
//                 <div className="search-icon" onClick={search}>
//                     <img src={search_icon} alt="Search" />
//                 </div>
//             </div>
//             {loading && <div>Loading...</div>}
//             {error && <div className="error">{error}</div>}
//             {weatherData && (
//                 <div>
//                     <div className="weather-image">
//                         <img src={weatherData.icon} alt="Weather Icon" />
//                     </div>
//                     <div className="weather-temp">{weatherData.temp}°C</div>
//                     <div className="weather-location">{weatherData.location}</div>
//                     <div className="data-container">
//                         <div className="elements">
//                             <img src={humidity_icon} alt="Humidity" className="icon" />
//                             <div className="data">
//                                 <div>{weatherData.humidity}%</div>
//                                 <div>Humidity</div>
//                             </div>
//                         </div>
//                         <div className="elements">
//                             <img src={wind_speed_icon} alt="Wind Speed" className="icon" />
//                             <div className="data">
//                                 <div>{weatherData.windSpeed} bft</div>
//                                 <div>Wind Speed</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default WeatherApp;
// import React, { useState, useEffect } from 'react';
// import './WeatherApp.css';
// import search_icon from '../Assets/search.png';
// import clear_icon from '../Assets/clear.png';
// import rain_icon from '../Assets/rain.png';
// import cloud_icon from '../Assets/cloud.png';
// import drizzle_icon from '../Assets/drizzle.png';
// import humidity_icon from '../Assets/humidity.png';
// import snow_icon from '../Assets/snow.png';
// import wind_speed_icon from '../Assets/wind_speed.png';
// import broken_clouds_icon from '../Assets/broken_clouds.png';
// import cloudy_icon from '../Assets/cloudy.png';
// import storm_icon from '../Assets/storm.png';
// import visbility_icon from '../Assets/visbility.png';
// import sunset_icon from '../Assets/sunset.png';
// const WeatherApp = () => {
//     const [city, setCity] = useState('London'); // Default city
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [weatherData, setWeatherData] = useState(null);

//     const api_key = "345b0a3851e93148bd0c9677cb8103c8";

//     useEffect(() => {
//         fetchWeather(city); // Fetch weather for the default city on load
//     }, []); // Empty dependency array to run only once on mount

//     const fetchWeather = async (selectedCity) => {
//         if (!selectedCity) return;
//         setLoading(true);
//         setError('');
//         try {
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=Metric&appid=${api_key}`;
//             const response = await fetch(url);
//             const data = await response.json();
//             if (!response.ok) throw new Error(data.message || "Unable to fetch weather.");
//             setWeatherData({
//                 temp: Math.floor(data.main.temp),
//                 humidity: data.main.humidity,
//                 windSpeed: Math.floor(data.wind.speed),
//                 icon: getWeatherIcon(data.weather[0].icon),
//                 location: data.name,
//                 country: data.sys.country  // Extracting country from response
//             });
//         } catch (error) {
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const getWeatherIcon = (iconCode) => {
//         switch(iconCode) {
//             case "01d":
//             case "01n":
//                 return clear_icon;
//             case "02d":
//             case "02n":
//                 return cloud_icon;
//             case "03d":
//             case "03n":
//                 return cloudy_icon;
//             case "04d":
//             case "04n":
//                 return broken_clouds_icon;
//             case "09d":
//             case "09n":
//                 return drizzle_icon;
//             case "10d":
//             case "10n":
//                 return rain_icon;
//             case "11d":
//             case "11n":
//                 return storm_icon;
//             case "13d":
//             case "13n":
//                 return snow_icon;
//             default:
//                 return clear_icon;
//         }
//     };

//     const search = () => fetchWeather(city);

//     return (
//         <div className="container">
//             <div className="top-bar">
//                 <input 
//                     type="text" 
//                     className="cityInput" 
//                     placeholder='Search' 
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                 />
//                 <div className="search-icon" onClick={search}>
//                     <img src={search_icon} alt="Search" />
//                 </div>
//             </div>
//             {loading && <div>Loading...</div>}
//             {error && <div className="error">{error}</div>}
//             {weatherData && (
//                 <div>
//                     <div className="weather-image">
//                         <img src={weatherData.icon} alt="Weather Icon" />
//                     </div>
//                     <div className="weather-temp">{weatherData.temp}°C</div>
//                     <div className="weather-location">{weatherData.location}, {weatherData.country}</div>
//                     <div className="data-container">
//                         <div className="elements">
//                             <img src={humidity_icon} alt="Humidity" className="icon" />
//                             <div className="data">
//                                 <div>{weatherData.humidity}%</div>
//                                 <div>Humidity</div>
//                             </div>
//                         </div>
//                         <div className="elements">
//                             <img src={wind_speed_icon} alt="Wind Speed" className="icon" />
//                             <div className="data">
//                                 <div>{weatherData.windSpeed} km/h</div>
//                                 <div>Wind Speed</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default WeatherApp
import React, { useState, useEffect } from 'react';
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import rain_icon from '../Assets/rain.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import humidity_icon from '../Assets/humidity.png';
import snow_icon from '../Assets/snow.png';
import wind_speed_icon from '../Assets/wind_speed.png';
import broken_clouds_icon from '../Assets/broken_clouds.png';
import cloudy_icon from '../Assets/cloudy.png';
import storm_icon from '../Assets/storm.png';
import visibility_icon from '../Assets/visibility.png'; // Ensure the name is correctly imported

const WeatherApp = () => {
    const [city, setCity] = useState('New York'); // Default city
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const api_key = "345b0a3851e93148bd0c9677cb8103c8";

    useEffect(() => {
        fetchWeather(city); // Fetch weather for the default city on load
    }, []); // Empty dependency array to run only once on mount

    const fetchWeather = async (selectedCity) => {
        if (!selectedCity) return;
        setLoading(true);
        setError('');
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=Metric&appid=${api_key}`;
            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Unable to fetch weather.");
            setWeatherData({
                temp: Math.floor(data.main.temp),
                humidity: data.main.humidity,
                windSpeed: Math.floor(data.wind.speed),
                visibility: data.visibility / 1000, // Convert to kilometers if needed
                icon: getWeatherIcon(data.weather[0].icon),
                location: data.name,
                country: data.sys.country  // Extracting country from response
            });
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const getWeatherIcon = (iconCode) => {
        switch(iconCode) {
            case "01d":
            case "01n":
                return clear_icon;
            case "02d":
            case "02n":
                return cloud_icon;
            case "03d":
            case "03n":
                return cloudy_icon;
            case "04d":
            case "04n":
                return broken_clouds_icon;
            case "09d":
            case "09n":
                return drizzle_icon;
            case "10d":
            case "10n":
                return rain_icon;
            case "11d":
            case "11n":
                return storm_icon;
            case "13d":
            case "13n":
                return snow_icon;
            default:
                return clear_icon;
        }
    };

    const search = () => fetchWeather(city);

    return (
        <div className="container">
            <div className="top-bar">
                <input 
                    type="text" 
                    className="cityInput" 
                    placeholder='Search' 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <div className="search-icon" onClick={search}>
                    <img src={search_icon} alt="Search" />
                </div>
            </div>
            {loading && <div>Loading...</div>}
            {error && <div className="error">{error}</div>}
            {weatherData && (
                <div>
                    <div className="weather-image">
                        <img src={weatherData.icon} alt="Weather Icon" />
                    </div>
                    <div className="weather-temp">{weatherData.temp}°C</div>
                    <div className="weather-location">{weatherData.location}, {weatherData.country}</div>
                    <div className="data-container">
                        <div className="elements">
                            <img src={humidity_icon} alt="Humidity" className="icon" />
                            <div className="data">
                                <div>{weatherData.humidity}%</div>
                                <div>Humidity</div>
                            </div>
                        </div>
                        <div className="elements">
                            <img src={wind_speed_icon} alt="Wind Speed" className="icon" />
                            <div className="data">
                                <div>{weatherData.windSpeed} BFT</div>
                                <div>Wind Speed</div>
                            </div>
                        </div>
                        <div className="elements">
                            <img src={visibility_icon} alt="Visibility" className="icon" />
                            <div className="data">
                                <div>{weatherData.visibility} km</div>
                                <div>Visibility</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherApp;
