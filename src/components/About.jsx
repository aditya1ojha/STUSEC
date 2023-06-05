import React from 'react'

const About = () => {
  return (
      <div name="about" className='w-full h-screen text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='md:pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500'>ABOUT</p>
            </div>

            <p className='flex text-xl mt-20'>
            Welcome to STUSEC - Your Biometric Attendance Tracker for Students!
            <br/>
            <br/>
            At STUSEC, we understand the importance of tracking attendance efficiently and accurately in educational institutions. With our innovative web application, we provide a convenient and reliable solution for managing student attendance using biometric technology. STUSEC aims to streamline attendance monitoring, enhance student accountability, and simplify administrative tasks for educational institutions of all sizes.
            </p>
        </div>    
      </div>
  )
}

export default About