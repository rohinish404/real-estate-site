import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Feed({data1}) {
  return (
    <div className='flex flex-col mr-5 mb-5 rounded-xl bg-white p-5'>
        <img className='mb-4' src={data1.img} />
        <div className='flex justify-around items-center'>
            <h1 className='text-2xl mr-2 text-purple-700'>{data1.price}<span className='text-black'>/month</span></h1>
            <button className='border-2 border-gray-500 rounded-full text-purple-700 p-2'><FavoriteBorderIcon /></button>
        </div>
        <h1 className='text-3xl font-bold'>{data1.name}</h1>
        <p>{data1.add}</p>

    </div>
  )
}

export default Feed
