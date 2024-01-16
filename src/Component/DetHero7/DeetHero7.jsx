
import { useState,useEffect } from 'react'
import axios from 'axios'
const DetHero7 = ({Theme,setTheme}) => {
    const toggle_mode=()=>{
        Theme=='light'? setTheme('dark'): setTheme('light')
    }
    const [card1, settitl] = useState([])
    useEffect(() => {
        axios.get("https://example-data.draftbit.com/books?id=7")
        .then(res=>{console.log(res.data)
        settitl(res.data)})
       }, [])
  return (
   <>
     {card1?.map((ele,i)=>{
        return(
    <div className={Theme=='light'? "details1":"details1dark"}>
       
    <div className="book">
        <img src={ele.image_url} alt="" />
    </div>
    <div className="rightdet">
    <h1>{ele.title}</h1>
    <div className="auth"><p>{ele.authors}</p></div>
    <div className="about"><h3>About Book</h3></div>
    <div className={Theme=='light'? "discrib":"blackdiscrib"}><p>{ele.description}</p></div>
    <div className="cart">
    <div className="view4"><button>Add To Cart</button></div>
    <div className={Theme=='light'? "viwe5":"viwe5black"}><button>Favorite</button></div>
    </div>
    <div className="line5"></div>
    <div className="numbers">
        <p><span>Pages Number:</span>&nbsp;&nbsp;&nbsp;&nbsp;  {ele.num_pages}&nbsp;Pages</p>
        <p><span>Rating Count: </span>&nbsp;&nbsp;&nbsp;&nbsp;{ele.rating_count}</p>
    </div>
        <div className="reviwe"><p><span>Riviews:</span>&nbsp;&nbsp;&nbsp;&nbsp;{ele.review_count}</p></div>
    </div>
    <div className="line2"></div>
    <div className={Theme=='light'? "copy":"blackcopy"}>
        <p>© All copyrights are reserved. B-World 2022. </p>
    </div>

 </div>)})}
 
 </>
  )
}

export default DetHero7