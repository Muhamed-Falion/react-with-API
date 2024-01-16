import React from 'react'
import Nav from '../NavBar/Nav'
import DetHero4 from '../DetHero4/DetHero4'
import { useState } from 'react'

const Det4 = () => {
  const [Theme, setTheme] = useState("light")
  return (
    <div>
        <Nav Theme={Theme} setTheme={setTheme}/>
        <DetHero4 Theme={Theme} setTheme={setTheme}/>
    </div>
  )
}

export default Det4