import React from 'react'
import Nav from '../NavBar/Nav'
import DetHero2 from '../DetHero2/DetHero2'
import { useState } from 'react'

const Det2 = () => {
  const [Theme, setTheme] = useState("light")
  return (
    <div>
   <Nav Theme={Theme} setTheme={setTheme}/>
        <DetHero2 Theme={Theme} setTheme={setTheme}/>

    </div>
  )
}

export default Det2