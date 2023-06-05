import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import animation from '../assets/animation.json'
import Lottie from 'lottie-react'

import { AiFillGithub } from 'react-icons/ai'

const Hero = () => {

  return (

    <div name="home" className='h-screen w-full text-white'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-start h-full w-full px-4'>
          
            <div className='flex flex-col justify-center h-full'>
                
                <h2 className='text-6xl font-bold flex items-center justify-center text-yellow-300'>STUSEC</h2>
                <h2 className='text-lg flex items-center justify-center py-10 text-yellow-300'>A BIOMETRIC ATTENDANCE SYSTEM FOR EDUCATIONAL INSTITUTES</h2>
                <a className='text-xl flex items-center justify-center' href='https://github.com' target='_blank'>
                  <AiFillGithub size={30}/>
                </a>

                <div className='pt-10 flex items-center justify-center'>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-5 rounded">
                    <Link to='/enroll'>
                      Enroll Student
                    </Link>
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-5 rounded">
                    <Link to='/takeAttendance'>
                      Take Attendance
                    </Link></button>
                </div>
                <div className='mt-10 mx-96 w-48'>
                  <Lottie animationData={animation}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero