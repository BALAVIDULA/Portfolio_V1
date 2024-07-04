import React from 'react'
import faceRecognition from '../assets/portfolio/faceRecognition.jpg'
import spamEmail from '../assets/portfolio/spamEmail.png'
import plantDetection from '../assets/portfolio/plantDetection.jpg'
import realEstate2 from '../assets/portfolio/realEstate2.jpg'
import pizzaDashboard from '../assets/portfolio/pizzaDashboard.png'
import nextWordPrediction from '../assets/portfolio/nextWordPrediction.png'

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: faceRecognition
        },
        {
            id:2,
            src: realEstate2
        },
        {
            id:3,
            src: plantDetection
        },
        {
            id:4,
            src: pizzaDashboard
        },
        {
            id:5,
            src: spamEmail
        },
        {
            id:6,
            src: nextWordPrediction
        },
    ];

    return (
        <div 
            name="portfolio" 
            className='bg-gradient-to-b pt-24 md:pt-32 from-gray-800 via-black-400 to-black w-full text-white md:h-screen'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Portfolio
                    </p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({id, src}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img 
                                src={src} 
                                alt="" 
                                className='rounded-md duration-200 hover:scale-105' 
                            />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    Demo
                                </button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}  
                </div>              
            </div>
        </div>
    );
};

export default Portfolio;