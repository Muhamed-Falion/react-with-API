import React from 'react'
import Nav from '../NavBar/Nav'
import DetHero6 from '../DetHero6/DetHero6'
import { useState } from 'react'

const Det6 = () => {
  const [Theme, setTheme] = useState("light")
  return (
    <div>
        <Nav Theme={Theme} setTheme={setTheme}/>
        <DetHero6 Theme={Theme} setTheme={setTheme}/>
    </div>
  )
}

export default Det6