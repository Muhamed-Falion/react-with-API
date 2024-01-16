import React from 'react'
import DetHero1 from '../../DetHero1/DetHero1'
import Nav from '../NavBar/Nav'
import DetHero2 from '../DetHero2/DetHero2'
import { useState } from 'react'

const Det1 = () => {
  const [Theme, setTheme] = useState("light")
  return (
    <div>
        <Nav Theme={Theme} setTheme={setTheme}/>
        <DetHero1 Theme={Theme} setTheme={setTheme}/>
    
    </div>
  )
}

export default Det1