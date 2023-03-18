//import payload from 'payload'
import React from 'react'
import Navebar from './Navebar'
import Footer from './Footer'



//const pload = require('../server')

function Layout({children}) {
  
  
  return (
    <>
     <Navebar></Navebar>
     <div>{children}</div>
     <Footer></Footer>
    </>
  )
}

export default Layout


