import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute text-white pt-[20%] px-24 bg-gradient-to-r from-black'>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <p className='py-6 w-1/3'>{overview}</p>
      <div>
        <button className='bg-white text-black px-10 p-4 text-xl rounded-md hover:bg-opacity-80'> ▶ Play</button>
        <button className='mx-2 bg-white text-black px-10 p-4  text-xl rounded-md hover:bg-opacity-80'>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle