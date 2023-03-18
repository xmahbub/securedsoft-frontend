import React from 'react'
import Image from 'next/image'

function Partners({color}) {
  return (
    <div className='w-12 sm:w-20 md:w-28 lg:w-32'>
        <svg viewBox="0 0 313 678" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M310.5 675.5H2.5V100L310.5 4V675.5Z" stroke={color} strokeWidth="3"/>
        
        <foreignobject className='bg-transparent' width="100%" height="100%">      
                <h1 className='mt-24 text-6xl'>par<span className='text-orange-600 text-6xl'>T</span>ners</h1>
                <div className='w-auto h-96 bg-slate-300 mt-5'>
                    <Image className='w-auto' src="/partners.png" alt="me" width="310" height="500" loading='lazy'  placeholder='blur' blurDataURL='/partners.png'/>
                </div>                     
        </foreignobject>
        </svg>
        

    </div>
  )
}

export default Partners