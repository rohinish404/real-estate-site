import React from 'react'
import Filter from './Filter'
import Feeds from './Feeds'
function Home() {
  return (
    <div className='p-20'>
        <div className='flex items-center justify-between'>
            <h1 className='text-4xl font-semibold'>Search Properties for rent</h1>
            <input className='border-2 border-gray-300 rounded px-2 py-2 text-l' placeholder='Search with Search Bar'></input>
        </div>
        <Filter />
        <Feeds />
    </div>
  )
}

export default Home
