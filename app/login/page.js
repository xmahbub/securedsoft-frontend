'use client'
import React from 'react'
import { useState } from 'react'


function page() {
  const [email,setemail] = useState('')
  const [passwd,setpasswd]=useState('')

  const login = async () =>{
    //console.log("login button pressed")
    // const response = await fetch('http://127.0.0.1:5000/api/customers/login',{
    //   method: "POST",
    //   mode: "cors",
    //   credentials: "include",
    //   headers: {
    //     "Content-Type": "application/json",
        
    //   },
    //   body: JSON.stringify({
    //     "email": `${email}`,
    //     "password": `${passwd}`
    // })
    // }
    // )
    // const data = await response.json();
    // console.log(data);

    

    const response = await fetch('http://127.0.0.1:5000/api/customers/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "email": `${email}`, "password": `${passwd}` })
    });

    const data = await response.json();
    console.log(data);

  }

  return (
    <div>
    <section className=' bg-gradient-to-br from-gradient1 via-gradient2 to-gradient3 w-full h-screen flex justify-center'>
        <div className='lg:w-2/5 md:w-3/5 w-4/5 lg:h-3/5 h-2/5 bg-black60 m-auto shadow-lg shadow-black60 rounded-md '>

        
        <div className='w-full h-full flex justify-center'>
            <form className='my-auto w-full '>
              <div className='lg:mr-20 lg:ml-20 lg:mt-10 lg:mb-10 ml-5 mr-5 mt-5 mb-5'>
               <input onChange={(val=>{
                //console.log(val.target.value)
                setemail(val.target.value)
               })} className='w-full p-3 rounded-sm bg-novoblue shadow-inner shadow-black focus:outline-none font-bold text-white text-xl' type="email" id="email" name="emai" />
              </div>

              <div className='lg:ml-20 lg:mr-20 lg:mt-10 lg:mb-10 ml-5 mr-5 mt-5 mb-5'>
               <input onChange={(val=>{
                //console.log(val.target.value)
                setpasswd(val.target.value)
               })} className='w-full p-3 rounded-sm bg-novoblue shadow-inner shadow-black focus:outline-none font-bold text-white text-xl' type="password" id="passwd" name="passwd" />
              </div>

              <div className='flex justify-center'>
                <div onClick={()=>{
                  login()
                }} className='bg-novoblue text-xl text-white uppercase font-bold pl-3 pr-3 pt-1 pb-1 rounded-md shadow-md shadow-black cursor-pointer'>Login</div>
              </div>


            </form>
        </div>



        </div>
    </section>
    </div>
  )
}

export default page