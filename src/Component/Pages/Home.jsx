import Nav from "../NavBar/Nav"
import Hero from "../Hero/Hero"
import Select from "../Select/Select"
import Did from "../Did/Did"
import { useState } from "react"
const Home = () => {
const [Theme, setTheme] = useState("light")

  return (
    <div>
        
         <Nav Theme={Theme} setTheme={setTheme} />
         
    <Hero Theme={Theme} setTheme={setTheme}  />
    <Select Theme={Theme} setTheme={setTheme}/>
    <Did Theme={Theme} setTheme={setTheme}/>
    </div>
  )
}

export default Home