

const WeatherCard = ( {weather} ) => {
  return <div className='mt-6'>
      <h2 className='text-center font-semibold text-xl'>
        {weather.name}, {weather.sys.country}
      </h2>
      <div className='flex justify-center items-center mt-4'>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} className='w-16 h-16' />
        <p className='font-bold text-3xl'>{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className='text-gray-400 text-center capitalize'>{weather.weather[0].description}</p>

      <div className='grid grid-cols-2 gap-4 mt-6 text-center'>
        <div>
          <p className='text-gray-400 text-md'>Humidity</p>
          <p className='font-bold'>{weather.main.humidity}%</p>
        </div>
        <div>
          <p className='text-gray-400 text-md'>Wind</p>
          <p className='font-bold'>{weather.wind.speed} m/s</p>
        </div>
        <div>
          <p className='text-gray-400 text-md'>Pressure</p>
          <p className='font-bold'>{weather.main.pressure} hPa</p>
        </div>
        <div>
          <p className='text-gray-400 text-md'>Feels like</p>
          <p className='font-bold'>{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
}

export default WeatherCard