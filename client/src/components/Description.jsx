import React from 'react'
import { assets } from '../assets/assets'
import {  motion } from "motion/react"

const Description = () => {
  return (
    <motion.div 
    initial={{opacity: 0.2, y:100}}
    transition={{duration: 1}}
    whileInView={{ opacity: 1, y:0 }}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI images</h1>
      <p className='text-gray-500 mb-8'>Turn your imaginations into visuals</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center '>
        <img src={assets.sample_img_2} alt="" className='w-80 xl:w-96 rounded-lg' />
        <div>
            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI Powered Text to Image Generator</h2>
            <p className='text-gray-600 mb-4'> Turn your ideas into captivating visuals with our free AI image generator. From striking designs to one-of-a-kind creations, just describe what you imagine—and see it brought to life in seconds. Simple, fast, and powerful.</p>
            <p className='text-gray-600 '>Enter a prompt and let our powerful AI turn your words into stunning visuals in seconds. Whether you're designing products, characters, or entirely new worlds, our technology makes the impossible visible—effortlessly and instantly. The future of creativity starts here..</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
