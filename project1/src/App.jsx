import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

function App() {
  return (
    <div style={{display:"flex",flexDirection:"column", gap:"30px"}}>
    <Navbar/>
    <Hero/>

    </div>
  )
}

export default App