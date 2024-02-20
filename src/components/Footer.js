import React from 'react'
import {
    FaDribbleSquare,
    FaTwitterSquare,
    FaGithubSquare,
    FaInstagram,
    FaFacebookSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 '>
        <h1 className=' w-full text-3xl font-bold text-[#00df9a] '>REACT.</h1>
    <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
    <div className='flex justify-between md:w-[75%] my-6 '>
        <FaFacebookSquare size={30}/>
        
        <FaGithubSquare size={30}/>
        <FaInstagram size={30}/>
        <FaTwitterSquare size={30}/>
    </div>
    <div className='lg:col-span-3 flex justify-between'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2text-sm'>Analytics</li>
            <li className='py-2text-sm'>Marketing</li>
            <li className='py-2text-sm'>Insights</li>
            <li className='py-2text-sm'>Commerce</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2text-sm'>Pricing</li>
            <li className='py-2text-sm'>Documentation</li>
            <li className='py-2text-sm'>Guides</li>
            <li className='py-2text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2text-sm'>About</li>
            <li className='py-2text-sm'>Blogs</li>
            <li className='py-2text-sm'>Jobs</li>
            <li className='py-2text-sm'>Commerce</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2text-sm'>Claims</li>
            <li className='py-2text-sm'>Policy</li>
            <li className='py-2text-sm'>Terms</li>
            <li className='py-2text-sm'>Commerce</li>
        </ul>
    </div>

    </div>
    </div>
    
  )
}

export default Footer