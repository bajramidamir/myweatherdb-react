import React, { useState } from 'react';
import weatherSvg from "/assets/weather.svg";

const Main = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day}, ${date} ${month}, ${year}` 
    }

    
    const searchCity = (e) => {
    if (e.key === "Enter") {
        fetch(`${import.meta.env.VITE_API_BASE}weather?q=${query}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        
      })
    } 
  }


  return (
    <div className='pt-10'>
        <div className="bg-gray-100 dark:bg-stone-800 rounded-lg w-9/12 md:w-6/12 p-4 mx-auto shadow-lg">
            <h1 className='font-bold text-2xl text-blue-500 dark:text-white'>MyWeatherDB</h1>
            <img src={weatherSvg} className="w-28 mx-auto" alt="#" />
            <h1 className='font-semibold p-2 text-black dark:text-white'>Search city:</h1>
            <input 
                type="text"
                placeholder='London ...'
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={searchCity}
                className="bg-gray-50 border border-gray-300 
                text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 
                dark:border-gray-600 dark:placeholder-gray-400 
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 text-center p-6 pb-36 w-9/12 md:w-10/12 mx-auto'>
            <div className="bg-gray-100 dark:bg-stone-800 text-black dark:text-white rounded-lg shadow-lg h-40 animate-in duration-700 fade-in-20">
                <h1 className="font-bold text-2xl p-2">{weather.name}, {weather.sys.country}</h1>   
                <div className='font-semibold text-xl p-4 mt-2'>{dateBuilder(new Date())}</div>
            </div>
            <div className={((weather.main.temp > 16) ? 'bg-orange-400 text-white rounded-lg shadow-lg h-40 animate-in duration-700 fade-in-20' : 'bg-blue-500 text-white rounded-lg shadow-lg h-40 animate-in duration-700 fade-in-20')}>
                <h1 className="font-bold text-2xl p-2">{Math.round(weather.main.temp)}°c</h1>
                <h1 className='font-semibold text-xl p-4 mt-2'>Feels like: {Math.round(weather.main.feels_like)}°c </h1>
            </div>
            <div className='bg-gray-100 dark:bg-stone-800 text-black dark:text-white rounded-lg shadow-lg h-40 animate-in duration-700 fade-in-20'>
                <h1 className="font-bold text-2xl p-3">{weather.weather[0].main}</h1>
                <img src={"http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"} alt="" 
                className='mx-auto p-3'/>
            </div>
        </div>
        ) : (
            <div className='pb-96'></div>
        )}
    </div>
  )
}

export default Main;