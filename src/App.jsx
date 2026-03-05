
import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Nav from './component/Nav'
import Video from './component/video'
import Marquee from './component/marquee'
import Middle from './component/Middlename'

function App() {
  

  return (
    <>
      <Navbar/>
      <Nav/>
      <Video />
      <Marquee />
      <Middle 
      h1="Aditya" h2="atharva"
       />
    </>
  )
}

export default App
