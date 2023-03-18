import React from 'react'
import { Donat } from '../../components/Dashbord/Donat'
import {Barc} from '../../components/Dashbord/Barc'

function page() {
  return (
    <section className='text-whitetext'>
        <div className='flex w-full lg:flex-row  flex-col'>
        
        <div className='lg:w-1/5  w-full  bg-black60'>
                         {/* left Section */}
        </div>


        <div className='w-full  bg-gradient-to-br from-gradient1 via-gradient2 to-gradient3 '>
         

         <div className='w-full h-24 '>
             <div className='bg-black60 m-10 h-full'></div>
         </div>


         <div className='flex flex-col lg:flex-row'>
         <div className='lg:w-w-3/5  w-full'>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2  lg:gap-10 md:gap-10 gap-5 p-10 lg:text-xl text-sm'>
               <div className='w-full h-16 bg-green-300 shadow-sm shadow-slate-500 rounded-md flex justify-center'>
                     <div className='my-auto  font-bold text-black60'>Innovate Server</div>
               </div>
               <div className='w-full h-16 bg-black60 shadow-sm shadow-slate-500 rounded-md flex justify-center'>
                     <div className='my-auto font-bold'>Innovate Database</div>
               </div>
               <div className='w-full h-16 bg-black60 shadow-sm shadow-slate-500 rounded-md flex justify-center'>
                     <div className='my-auto font-bold'>Innovate Database</div>
               </div>
               
            </div>


            <div className='flex lg:gap-10 gap-5 p-10'>
               <div className='w-full h-60 bg-black60 shadow-sm shadow-slate-500  rounded-md'>
                     
                    <div className=' h-3/4 flex justify-center relative'>
                        <Donat></Donat>
                        <div className='absolute flex justify-center w-full h-full'>
                           <h1 className='m-auto'>$6 USD</h1>
                        </div>
                        
                    </div>
                    
                    <div className=' h-1/4 flex justify-center'>
                        <h1 className='m-auto text-xl font-bold'>CPU Used GB</h1>
                    </div>
                  

               </div>

               <div className='w-full h-60  bg-black60 shadow-sm shadow-slate-500  rounded-md'>
                   <div className='w-full h-60 bg-black60 shadow-sm shadow-slate-500  rounded-md'>
                     
                     <div className=' h-3/4 flex justify-center relative'>
                         <Donat></Donat>
                         <div className='absolute flex justify-center w-full h-full'>
                            <h1 className='m-auto'>$6 USD</h1>
                         </div>
                         
                     </div>
                     
                     <div className=' h-1/4 flex justify-center'>
                         <h1 className='m-auto text-xl font-bold'>Memory Used GB</h1>
                     </div>
                   
 
                </div>


               </div>
            </div>

            {/* <div className='flex lg:gap-10 gap-5 p-10'>
               <div className='w-full h-60 bg-black60 shadow-sm shadow-slate-500  rounded-md'>
                     
                    <div className=' h-3/4 flex justify-center relative'>
                        <Donat></Donat>
                        <div className='absolute flex justify-center w-full h-full'>
                           <h1 className='m-auto'>$6 USD</h1>
                        </div>
                        
                    </div>
                    
                    <div className=' h-1/4 flex justify-center'>
                        <h1 className='m-auto text-xl font-bold'>Network RX</h1>
                    </div>
                  

               </div>

               <div className='w-full h-60  bg-black60 shadow-sm shadow-slate-500  rounded-md'>
                   <div className='w-full h-60 bg-black60 shadow-sm shadow-slate-500  rounded-md'>
                     
                     <div className=' h-3/4 flex justify-center relative'>
                         <Donat></Donat>
                         <div className='absolute flex justify-center w-full h-full'>
                            <h1 className='m-auto'>$6 USD</h1>
                         </div>
                         
                     </div>
                     
                     <div className=' h-1/4 flex justify-center'>
                         <h1 className='m-auto text-xl font-bold'>Network TX</h1>
                     </div>
                   
 
                </div>


               </div>
            </div> */}

            <div className='p-10'>
               <div className='w-full  bg-black60 shadow-sm shadow-slate-500  rounded-md flex justify-center'>
                  <div className='w-full'>
                    <Barc></Barc>
                  </div>
               </div>

            </div>

            
            


         </div>


         <div className='lg:w-2/5 w-full flex flex-col justify-between'>
            
            <div className='p-10'>
               <div className='w-full h-96 bg-black60 shadow-sm shadow-slate-500  rounded-md'></div>

            </div>

            <div className=' pr-10 pl-10 pb-10'>
               <div className='w-full h-96 bg-black60 shadow-sm shadow-slate-500  rounded-md'></div>

            </div>


         </div>


        </div>
        </div>
        </div>

    </section>
  )
}

export default page