import React from 'react'
import logol from '../../images/Logo-Light.svg'
import logod from '../../images/Logo-Dark.svg'
import moon from '../../images/moon-01.svg'
import menue from '../../images/Menu.png'
import cross from '../../images/fi-bs-cross.svg'
import './NavStyle.css'
import {Link, NavLink} from 'react-router-dom'
import sun from '../../images/sun.svg'
import { useState } from 'react'
import { Switch } from 'antd'
const Nav = ({Theme,setTheme}) => {
    const toggle_mode=()=>{
      Theme=='light'? setTheme('dark'): setTheme('light')
    }
    const [menu,setmenu]=useState(false)
   
  return (
    <>
    <div className={Theme=='light'? "nav":"dark"}>
    <div className="bworld">
    <img src={Theme=='light'? logol:logod} alt="" /></div>
    <div className="ul">
    <ul>
        <li><NavLink to={'/'} className={({ isActive}) =>isActive ? "active" : "" }
        style={({ isActive}) => {
          return {
            fontWeight: isActive ? "" : "",
            color: Theme=='light'?  "black" : "white",
            textDecoration: isActive? "none":"none",
            
          };
        }}>Home</NavLink> </li>
        <li>News</li>
        <li>Promotion of the mount</li>
        <li>Plublishs</li>
        <li>Subscribe to the newsletter</li>
    </ul>
    </div>
    <div className="mode">
        <div className="moon"><img onClick={()=>{toggle_mode()}} src={Theme=='light'? moon:sun} alt="" /></div>
        <div className="darkmode"><p>{Theme=='light'? "Dark Mode":"Light Mode"}</p></div>
    </div>
    <div className="menicon">
        <img src={menue} alt="" onClick={()=>{setmenu(!menu)}} style={{display:(!menu)?"block":"none"}}/>
      
      </div>
      <div className={Theme=='light'? "mobcont":"mobcontdark"} style={{display:(menu)?"block":"none"}}>
        <div>
      <div className={Theme=='light'? "mobnav":"mobnavdark"}>
          <img src={cross} alt="" onClick={()=>{setmenu(!menu)}} />
          <div className="list">
          <div className="home"><p><NavLink to={'/'} className={({ isActive}) =>isActive ? "active" : "" }
        style={({ isActive}) => {
          return {
            fontWeight: isActive ? "" : "",
            color: Theme=='light'?  "black" : "white",
            textDecoration: isActive? "none":"none",
            
          };
        }}>Home</NavLink></p></div>
          <div className="News"><p>News</p></div>
          <div className="Promotion of the mount"><p>Promotion of the mount</p></div>
          <div className="Plublishs"><p>Plublishs</p></div>
          <div className="suscribe">Subscribe to the newsletter</div>
        </div>
        
      
      </div> 
      <div className="mobmod">
      <div className="linenav"></div>
      <div className="switch">
        <div className="dr"><p>Dark Mode</p></div>
      <Switch className='sw' onClick={()=>{toggle_mode()}} src={Theme=='light'? moon:sun} />

      </div>
      </div>
      </div>
      
        </div>
        
    </div>
    
    </>
  )
}

export default Nav