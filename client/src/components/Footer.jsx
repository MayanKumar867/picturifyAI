import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <div className='  flex items-center justify-between gap-4 py-4 mt-20 px-6 '>
       <img src={assets.newlogo} alt="" width={180} />
       <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>&#9400; Copyright @Imagify | All right reserved</p>

       <div className='flex gap-2.5'>
       <a href="/">
           <img src={assets.facebook_icon} alt="" />
        </a>
        <a href="/">
           <img src={assets.x_icon} alt="" height={35} width={35} />
        </a>
        <a href="/">
           <img src={assets.instagram_icon} alt="" />
        </a>
       </div>
    </div>
    
  )
}

export default Footer
