'use client'
import Link from 'next/link'
import aboutClubData from '../data/cardData.json'
import Image from 'next/image'
import { BackgroundGradient } from './ui/background-gradient'

const AboutTheClub = () => {
    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className='text-center'>
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>About The Club</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
                        Unleashing potential through competition, collaboration, and continuous learning.
                    </p>
                </div>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
                    {aboutClubData.map((clubInfo, index) => (
                        <div key={index} className='flex justify-center'>
                            <BackgroundGradient>
                                <div className="flex flex-col p-6 rounded-[22px] h-full overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:bg-indigo-400 hover:text-gray-900">
                                    
                                    {/* Simple Image without previous CSS */}
                                    <Image 
                                        src={clubInfo.image} 
                                        alt={clubInfo.title} 
                                        width={500} 
                                        height={300} 
                                    />
                                    
                                    <h3 className="text-lg font-bold text-white">{clubInfo.title}</h3>
                                    <p className="mt-2 text-sm text-gray-300">{clubInfo.description}</p>
                                    <p className="mt-4 text-sm text-gray-300"><strong>Mission:</strong> {clubInfo.mission}</p>
                                    <div className="mt-4">
                                        <strong>Core Values:</strong>
                                        <ul className="text-sm text-gray-300">
                                            {clubInfo.values.map((value, valueIndex) => (
                                                <li key={valueIndex}>- {value}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href={'/about'}>
                <button className="w-40 h-12 rounded-full bg-white text-black text-sm">
          Join Us
        </button>
                </Link>
            </div>
        </div>
    )
}

export default AboutTheClub;
