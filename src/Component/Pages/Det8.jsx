import React from 'react'
import Nav from '../NavBar/Nav'
import DetHero8 from '../DetHero8/DetHero8'
import { useState } from 'react'

const Det8 = () => {
  const [Theme, setTheme] = useState("light")
  return (
    <div>
         <Nav Theme={Theme} setTheme={setTheme}/>
        <DetHero8 Theme={Theme} setTheme={setTheme}/>
    </div>
  )
}

export default Det8