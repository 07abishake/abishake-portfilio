import React from 'react'
import heroImage from '../assets/heroImage.jpeg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function Home() {
  return (
    <div  name="home"className='h-screen w-full bg-gradient-to-b from-black
    via-black
     to-gray-800 '>
        <div className='max-w-screen-lg justify-center
        items-center mx-auto flex flex-col h-full px-4 md:flex-row'>
            <div  className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl
                font-bold  text-white cursor-pointer capitalize hover:scale-75 duration-500'>
            I'am A Fullstack Developer
            </h2>
            <p className='text-gray-500 py-4 max-w-md:'>
                Iam a recent Fullstack certified developer 2023 graduate I have
                hands  on My Skills HTML,CSS, And JavaScript, ReactJs And MongoDb 
             Nodejs , ExpresJs And Gain Through My Project Like E commerece Website
             I exited to Got the Opertunity to Work With Collabrative And Inovative Environment
             My carrer Contineously Grow As a developer

            </p>
            <div>
                <button className=' group text-white w-fit px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer h-12 '>
                   PortFolio
                   <span className='group-hover:rotate-90' >
                   <MdOutlineKeyboardArrowRight size={25}
                   className='ml-1'/>
                   </span>
                </button>
            </div>
                
            </div>
            <div>
                <img src={heroImage} alt='my profile'
                className='md:w-full rounded-2xl mx-auto w-2/3  cursor-pointer hover:scale-90 duration-500' />
            </div>
        </div>
    </div>
  )
}

export default Home