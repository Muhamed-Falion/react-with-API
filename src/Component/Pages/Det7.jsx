import React from 'react'
import Nav from '../NavBar/Nav'
import DetHero7 from '../DetHero7/DeetHero7'
import { useState } from 'react'

const Det7 = () => {
  const [Theme, setTheme] = useState("light")
  return (
    <div>
          <Nav Theme={Theme} setTheme={setTheme}/>
        <DetHero7 Theme={Theme} setTheme={setTheme}/>
    </div>
  )
}

export default Det7