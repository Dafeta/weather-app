import { useState } from 'react'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import WeatherVideoAlt from './WeatherVideoAlt.mp4'

function App() {

  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const API_KEY = import.meta.env.VITE_API_KEY
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`

  const fetchWeather = async (city) => {
    setLoading(true)
    setError('')
    try {
      const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      const response = await axios.get(url)
      console.log(response.data)
      setWeather(response.data)
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found. Please try again.")
      } else {
        setError("An error occured, please try again later.")
      }
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen h-screen flex flex-col justify-center items-center bg-blue-100 relative overflow-hidden'>
      <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted playsInline>
        <source src={WeatherVideoAlt} />
      </video>
      <div className='bg-black/60 text-white  rounded-none sm:rounded-lg shadow-lg p-6 md:p-8 max-w-md w-full h-screen sm:h-auto z-10 backdrop-blur-sm'>
        <h1 className='text-white font-bold text-xl md:text-3xl text-center mb-6'>Weather App</h1>
        <SearchBar fetchWeather={fetchWeather}/>
        { loading && <p className='text-center mt-4 font-semibold'>Loading...</p> }
        { error && <p className='text-center mt-4 text-red-500'>{error}</p> }
        { weather && <WeatherCard weather={weather}/> }
      </div>
    </div>
  )
}

export default App
