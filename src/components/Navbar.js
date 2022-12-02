import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
function Navbar() {
  return (
    <div className='border-2 border-black flex justify-around p-3'>
      <div className='flex items-center'>
          <HomeIcon  className='text-purple-500'/>
          <h1 className='text-xl font-bold'>Eastery</h1>
      </div>
      <div className='flex items-center text-l ml-0'>
          <a href='#'><h1 className='pr-5'>Rent</h1></a>
          <a href='#'><h1 className='pr-5'>Buy</h1></a>
          <a href='#'><h1>Sell</h1></a>
            <select className='p-2 ml-4 bg-purple-50'> 
                <option value="Manage Property">Manage Property</option>
                <option value="Buy">Buy</option>
                <option value="Rent">Rent</option>
                <option value="Manage">Manage</option>
            </select>  
            <select className='ml-4 bg-purple-50'> 
                <option value="Resources">Resources</option>
                <option value="Contact">Contact</option>
                <option value="View">View</option>
                <option value="Call">Call</option>
            </select>   
      </div>
      <div className='flex items-center text-l'>
        <button className='border-2 border-gray-300 rounded-lg px-4 py-2'>Login</button>
        <button className='ml-5 border-2 border-gray-300 rounded-lg px-3 py-2 text-white bg-purple-700'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
