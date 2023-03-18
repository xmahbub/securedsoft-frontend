import React from 'react'
import { FiTwitter } from 'react-icons/fi';
import {AiOutlineFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import { motion } from "framer-motion"

function Navebar() {
  return (
    <div className="bg-body-texture background-size:cover bg-contain flex navbar justify-between bg-base-100 pl-4 shadow-xl">
       
        <button className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current text-orange-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>

        <div className='pr-7 gap-2'>
            <motion.div
             whileHover={{ scale: 1.2, rotate: 360 }}
             whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
            > <FiTwitter className='w-6 h-6 text-orange-600' /></motion.div>
            <motion.div
             whileHover={{ scale: 1.2, rotate: 360 }}
             whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
            ><AiOutlineFacebook className='w-7 h-7 text-orange-600'></AiOutlineFacebook></motion.div>
            <motion.div
             whileHover={{ scale: 1.2, rotate: 360 }}
             whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
            ><BsInstagram className='w-6 h-6 text-orange-600'></BsInstagram></motion.div>
            
           
            
        </div>
        
    </div>
  )
}

export default Navebar