import React from 'react'
import Image from 'next/image'

function Projects({color}) {
  return (
    <div className='w-12 sm:w-20 md:w-28 lg:w-32'>
        <svg viewBox="0 0 313 778" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M310.5 99.5L2.5 4V671.5L310.5 774V99.5Z" stroke={color} strokeWidth="3"/>
           <path d="M310.5 99.5L2.5 4V671.5L310.5 774V99.5Z" stroke="black" strokeOpacity="0.2" strokeWidth="3"/>
        
           <foreignobject className='bg-transparent' width="100%" height="100%">
                <div className='w-auto h-96 bg-slate-300 mt-28'>
                    <Image className='w-auto' src="/projects.png" alt="me" width="320" height="450" loading='lazy'  placeholder='blur' blurDataURL='/projects.png'/>
                </div>
                
                <h1 className='mt-14 text-6xl'>proj<span className='text-orange-600 text-6xl'>E</span>cts</h1>
                
           </foreignobject>

       </svg>
    </div>
  )
}

export default Projects