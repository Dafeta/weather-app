import { useState } from 'react'


export default function SearchBar({ fetchWeather }) {

  const [city, setCity] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      fetchWeather(city)
      setCity('')
    }
  }

  return (
    <form className='flex flex-col gap-3 sm:flex-row' onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder='Enter city name...' 
      value={city}
      onChange={(e) => setCity(e.target.value)}
      className='border border-gray-300 outline-none p-2 rounded-lg sm:rounded-l-lg flex-1'
      />
      <button type='submit' className='cursor-pointer bg-green-500 p-2 rounded-lg sm:rounded-r-lg  hover:bg-green-600 text-white transition'>
        Search
      </button>
    </form>
  )
}
