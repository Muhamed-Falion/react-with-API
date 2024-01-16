import React from 'react'
import Nav from '../NavBar/Nav'
import DetHero3 from '../DetHero3/DetHero3'
import { useState } from 'react'

const Det3 = () => {
  const [Theme, setTheme] = useState("light")
  return (
    <div>
        <Nav Theme={Theme} setTheme={setTheme}/>
        <DetHero3 Theme={Theme} setTheme={setTheme}/>
    </div>
  )
}

export default Det3