import React from 'react'
import logoDark from '../assets/logo-dark.png'


const TakeAttendance = () => {
  return (
    <main>
    <div className='flex justify-between items-center w-full h-15 px-4 text-white bg-black fixed z-10 top-0'>
        <div>
            <img src= {logoDark} alt='logoDark' className='w-20'></img>
        </div>
        <div>
            <h2 className='px-5'>© STUSEC</h2>
        </div>
    </div>

    <div className="fixed w-screen h-screen flex justify-center p-120 md:p-160 px-4 pointer-events-none bg-gradient-to-r from-black to-red-900">
    </div>
</main>  
  )
}

export default TakeAttendance