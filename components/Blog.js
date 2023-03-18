import React from 'react'
import Image from 'next/image'

function Blog({color}) {
  return (
    <div className='w-12 sm:w-20 md:w-28 lg:w-32'>
         <h1 className='text-xs sm:text-1xl md:text-2xl lg:text-3xl'>bl<span className='text-orange-600 '>O</span>g</h1>
        <svg className='mt-2'viewBox="0 0 311 686" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M308 3H3V682L308 579.5V3Z" stroke={color} strokeWidth="3"/>
        <path d="M308 3H3V682L308 579.5V3Z" stroke="black" strokeOpacity="0.2" strokeWidth="3"/>
        <foreignobject className='bg-transparent' width="100%" height="100%">      
                <div className='w-auto h-200 bg-slate-300 mt-1'>
                    <Image className='w-auto' src="/blog.png" alt="me" width="320" height="500" loading='lazy'  placeholder='blur' blurDataURL='/blog.png'/>
                </div>                     
        </foreignobject>
        </svg>
    </div>
  )
}

export default Blog