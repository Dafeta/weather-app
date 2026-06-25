import React, { useState } from 'react'


export default function SearchBar({ fetchWeather }) {

  const [city, setCity] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim) {
      fetchWeather(city)
      setCity('')
    }
  }

  return (
    <form className='flex' onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder='Enter city name...' 
      value={city}
      onChange={(e) => setCity(e.target.value)}
      className='border border-gray-300 outline-none p-2 rounded-l-lg border-r-0 flex-1'
      />
      <button type='submit' className='cursor-pointer bg-blue-500 p-2 rounded-r-lg border-r-0 hover:bg-blue-600 text-white transition'>
        Search
      </button>
    </form>
  )
}
