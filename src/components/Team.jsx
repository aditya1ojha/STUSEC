import React from 'react'
import adityaOjha from '../assets/adityaOjha.jpg'
import kushalKachari from '../assets/kushalKachari.jpeg'
import rahulDas from '../assets/rahulDas.jpg'

import { AiFillLinkedin } from 'react-icons/ai'

const Team = () => {


    const team = [
        {
            id: 1,
            imgSrc: adityaOjha,
            memberName: 'Aditya Ojha',
            linkedin: 'https://linkedin.com',
        },
        {
            id: 2,
            imgSrc: kushalKachari,
            memberName: 'Kushal Kachari',
            linkedin: 'https://linkedin.com',
        },
        {
            id: 3,
            imgSrc: rahulDas,
            memberName: 'Rahul Das',
            linkedin: 'https://linkedin.com',
        },
    ];
    
  return (
    <div name="team" className='w-full h-screen text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='md:pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500'>TEAM</p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-10">
                {team.map(({ id, imgSrc, memberName, linkedin }) => (
                    <div key={id} className="flex flex-col items-center justify-center">
                    <img src={imgSrc} alt="team member" className="w-64 h-64 object-cover rounded-full" />
                    <div className="text-center mt-4">
                        <h2 className="text-xl text-white">{memberName}</h2>
                    </div>
                    <div className="mt-2">
                        <a href={linkedin} target="_blank" rel="noreferrer">
                        <button>
                            <AiFillLinkedin size={20} />
                        </button>
                        </a>
                    </div>
                    </div>
                ))}
            </div>
            

        </div>
    </div>
    
  )
}

export default Team