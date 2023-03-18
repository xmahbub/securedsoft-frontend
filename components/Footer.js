import React from 'react'
import Image from 'next/image'


function Footer() {
  
  
  return (
    <footer className="bg-body-texture background-size:cover bg-contain footer items-center p-3 fixed bottom-0 left-0">
    <div className="items-center grid-flow-col">
    <p className='text-xl'>Demo Footer</p>
    </div> 
    <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    
    <a> <Image className='w-auto' src="/logo.png" alt="me" width="130" height="35" loading='lazy'/></a>
    
    </div>
   </footer>
  )
}

export default Footer


