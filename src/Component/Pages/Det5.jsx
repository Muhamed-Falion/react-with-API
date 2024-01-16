import React from 'react'
import Nav from '../NavBar/Nav'
import DetHero5 from '../DertHero5/DetHero5'
import { useState } from 'react'

const Det5 = () => {
  const [Theme, setTheme] = useState("light")
  return (
    <div>
        <Nav Theme={Theme} setTheme={setTheme}/>
        <DetHero5 Theme={Theme} setTheme={setTheme}/>
    </div>
  )
}

export default Det5