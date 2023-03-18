import React from 'react'
import Image from 'next/image'

function Carier({color}) {
  return (
    <div className='w-12 sm:w-20 md:w-28 lg:w-32'>
        
        <svg viewBox="0 0 313 778" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M310.5 99.5L2.5 4V671.5L310.5 774V99.5Z" stroke={color} strokeWidth="3"/>
           <path d="M310.5 99.5L2.5 4V671.5L310.5 774V99.5Z" stroke="black" strokeOpacity="0.2" strokeWidth="3"/>
        
           <foreignobject className='bg-transparent' width="100%" height="100%">
           <h1 className='ml-1 mt-10 text-6xl'>c<span className='text-orange-600 '>A</span>rier</h1>
                <div className='w-auto h-72 bg-slate-300 mt-12 ml-0'>
                    <Image className='w-auto' src="/carier.png" alt="me" width="320" height="525" loading='lazy'  placeholder='blur' blurDataURL='/carier.png'/>
                </div>
                   
           </foreignobject>

       </svg>
    </div>
  )
}

export default Carier