import React from 'react'
import Image from 'next/image'

function News({color}) {
  return (
    <div className='w-12 sm:w-20 md:w-28 lg:w-32'>
        <svg viewBox="0 0 312 676" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M309 3H2.5V673H309V3Z" stroke={color} strokeWidth="3"/>
        <path d="M309 3H2.5V673H309V3Z" stroke="black" strokeOpacity="0.2" strokeWidth="3"/>
        <foreignobject className='bg-transparent' width="100%" height="100%">
                <h1 className='mt-1 text-7xl'><span className='text-orange-600 text-7xl'>N</span>ews</h1>
                <div className='w-auto h-96 bg-slate-300 mt-20'>
                    <Image className='w-auto' src="/news.png" alt="me" width="320" height="420" loading='lazy'  placeholder='blur' blurDataURL='/news.png'/>
                </div>
        </foreignobject>
        
        </svg>
    </div>
  )
}

export default News