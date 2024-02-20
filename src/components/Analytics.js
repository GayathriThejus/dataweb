import React from 'react'
import Laptop from '../assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full py-16 px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px]'src={Laptop} alt='/'/>
            <div className='flex flex-col justify-center sm:py-4'>
                <p className='text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='font-bold text-xl'>Manage Data Analytics Centrally</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is 
                     to create a natural looking block of text (sentence, paragraph, page, etc.) 
                     that doesn't distract from the layout.
                </p>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black'>Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Analytics