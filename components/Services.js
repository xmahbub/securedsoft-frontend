import React from 'react'
import Image from 'next/image'

function Services({color}) {
    
  return (
        
        <div className='w-12 sm:w-20 md:w-28 lg:w-32 '>
          <svg viewBox="0 0 310 771" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M307.5 2H2V767.5L307.5 675V2Z" stroke={color} strokeWidth="3"/>
             <path d="M307.5 2H2V767.5L307.5 675V2Z" stroke="black" strokeOpacity="0.2" strokeWidth="3"/>
             <path d="M2 99H305.5" stroke={color} strokeWidth="5"/>
             <path d="M2 99H305.5" stroke="black" strokeOpacity="0.2" strokeWidth="5"/>

             <foreignobject className='bg-transparent' width="100%" height="100%">      
                <h1 className='mt-24 text-6xl'>SERV<span className='text-orange-600 text-7xl'>I</span>CES</h1>
                <div className='w-auto h-96 bg-slate-300 mt-5'>
                    <Image className='w-auto' src="/Services.png" alt="me" width="300" height="350" loading='lazy'  placeholder='blur' blurDataURL='/Services.png'/>
                </div>                     
             </foreignobject>
             
        </svg>
        </div>
        
  )
}

export default Services