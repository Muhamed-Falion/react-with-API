import './SelectStyle.css'
import girl from '../../images/book.png'
import { useState,useEffect } from 'react'
import axios from 'axios'
import open from '../../images/book-open-01.svg'
import star from '../../images/bi_star-fill (1).svg'
import { Link } from 'react-router-dom'

const Select = ({Theme,setTheme}) => {

  const [card1, settitl] = useState([])
  const [card2, settitl2] = useState([])
  const [card3, settitl3] = useState([])
  const [card4, settitl4] = useState([])
  const [card5, settitl5] = useState([])
  const [card6, settitl6] = useState([])
  const [card7, settitl7] = useState([])
  const [card8, settitl8] = useState([])
  
  const toggle_mode=()=>{
    Theme=='light'? setTheme('dark'): setTheme('light')
  }

  useEffect(() => {
   axios.get("https://example-data.draftbit.com/books?id=1")
   .then(res=>{
   settitl(res.data)})
  }, [])
  useEffect(() => {
    axios.get("https://example-data.draftbit.com/books?id=2")
    .then(res=>{
    settitl2(res.data)})
   }, [])
   useEffect(() => {
    axios.get("https://example-data.draftbit.com/books?id=3")
    .then(res=>{
    settitl3(res.data)})
   }, [])
   useEffect(() => {
    axios.get("https://example-data.draftbit.com/books?id=4")
    .then(res=>{
    settitl4(res.data)})
   }, [])
   useEffect(() => {
    axios.get("https://example-data.draftbit.com/books?id=5")
    .then(res=>{
    settitl5(res.data)})
   }, [])
   useEffect(() => {
    axios.get("https://example-data.draftbit.com/books?id=6")
    .then(res=>{
    settitl6(res.data)})
   }, [])
   useEffect(() => {
    axios.get("https://example-data.draftbit.com/books?id=7")
    .then(res=>{
    settitl7(res.data)})
   }, [])
   useEffect(() => {
    axios.get("https://example-data.draftbit.com/books?id=8")
    .then(res=>{
    settitl8(res.data)})
   }, [])
 


  
  return (
    <div className={Theme=='light'? "select":"darkselect"}>
    <h2>Selected For You</h2>
    <div className="hundred">
    <div className="cards">
      <div className="card1">
      {card1?.map((ele,i)=>{
      return(
        <div>
       <div className="poster"><img src={ele.image_url} alt="" /></div>
        </div>
      )
    })}
    


    <div >
    {card1?.map((ele,i)=>{
      return(
        <div className="nameofwriter">
       <p> {ele.authors}</p>
        </div>
      )
    })}
    <div>
    {card1?.map((ele,i)=>{
      return(
        <div className='details'>
       <div className="star"><img src={open} alt="" />
       <p>{ele.num_pages}</p></div>
       <div className='star'><img src={star} alt="" />
       <p>{ele.rating}</p></div>
        </div>
      )})}
      
      <div className="view"><Link to={'/det1'}><button>Show Details</button></Link></div>
    </div>


    </div>
    
    </div>
    <div className="card1">
      {card2?.map((ele,i)=>{
      return(
        <div>
       <div className="poster"><img src={ele.image_url} alt="" /></div>
        </div>
      )
    })}
    


    <div >
    {card2?.map((ele,i)=>{
      return(
        <div className="nameofwriter">
       <p> {ele.authors}</p>
        </div>
      )
    })}
    <div>
    {card2?.map((ele,i)=>{
      return(
        <div className='details'>
       <div className="star"><img src={open} alt="" />
       <p>{ele.num_pages}</p></div>
       <div className='star'><img src={star} alt="" />
       <p>{ele.rating}</p></div>
        </div>
      )})}
      
      <div className="view"><Link to={'/det2'}><button>Show Details</button></Link></div>
    </div>


    </div>
    
    </div>
    <div className="card1">
      {card3?.map((ele,i)=>{
      return(
        <div>
       <div className="poster"><img src={ele.image_url} alt="" /></div>
        </div>
      )
    })}
    


    <div >
    {card3?.map((ele,i)=>{
      return(
        <div className="nameofwriter">
       <p> {ele.authors}</p>
        </div>
      )
    })}
    <div>
    {card3?.map((ele,i)=>{
      return(
        <div className='details'>
       <div className="star"><img src={open} alt="" />
       <p>{ele.num_pages}</p></div>
       <div className='star'><img src={star} alt="" />
       <p>{ele.rating}</p></div>
        </div>
      )})}
      
      <div className="view"><Link to={'/det3'}><button>Show Details</button></Link></div>
    </div>


    </div>
    
    </div>
    
    <div className="card1">
      {card4?.map((ele,i)=>{
      return(
        <div>
       <div className="poster"><img src={ele.image_url} alt="" /></div>
        </div>
      )
    })}
    


    <div >
    {card4?.map((ele,i)=>{
      return(
        <div className="nameofwriter">
       <p> {ele.authors}</p>
        </div>
      )
    })}
    <div>
    {card4?.map((ele,i)=>{
      return(
        <div className='details'>
       <div className="star"><img src={open} alt="" />
       <p>{ele.num_pages}</p></div>
       <div className='star'><img src={star} alt="" />
       <p>{ele.rating}</p></div>
        </div>
      )})}
      
      <div className="view"><Link to={'/det4'}><button>Show Details</button></Link></div>
    </div>


    </div>
    
    </div>
    </div>
    <div className="last4">
    <div className="card1">
      {card5?.map((ele,i)=>{
      return(
        <div>
       <div className="poster"><img src={ele.image_url} alt="" /></div>
        </div>
      )
    })}
    


    <div >
    {card5?.map((ele,i)=>{
      return(
        <div className="nameofwriter">
       <p> {ele.authors}</p>
        </div>
      )
    })}
    <div>
    {card5?.map((ele,i)=>{
      return(
        <div className='details'>
       <div className="star"><img src={open} alt="" />
       <p>{ele.num_pages}</p></div>
       <div className='star'><img src={star} alt="" />
       <p>{ele.rating}</p></div>
        </div>
      )})}
      
      <div className="view"><Link to={'/det5'}><button>Show Details</button></Link></div>
    </div>


    </div>
    
    </div>
    <div className="card1">
      {card6?.map((ele,i)=>{
      return(
        <div>
       <div className="poster"><img src={ele.image_url} alt="" /></div>
        </div>
      )
    })}
    


    <div >
    {card6?.map((ele,i)=>{
      return(
        <div className="nameofwriter">
       <p> {ele.authors}</p>
        </div>
      )
    })}
    <div>
    {card6?.map((ele,i)=>{
      return(
        <div className='details'>
       <div className="star"><img src={open} alt="" />
       <p>{ele.num_pages}</p></div>
       <div className='star'><img src={star} alt="" />
       <p>{ele.rating}</p></div>
        </div>
      )})}
      
      <div className="view"><Link to={'/det6'}><button>Show Details</button></Link></div>
    </div>


    </div>
    
    </div>
    <div className="card1">
      {card7?.map((ele,i)=>{
      return(
        <div>
       <div className="poster"><img src={ele.image_url} alt="" /></div>
        </div>
      )
    })}
    


    <div >
    {card7?.map((ele,i)=>{
      return(
        <div className="nameofwriter">
       <p> {ele.authors}</p>
        </div>
      )
    })}
    <div>
    {card7?.map((ele,i)=>{
      return(
        <div className='details'>
       <div className="star"><img src={open} alt="" />
       <p>{ele.num_pages}</p></div>
       <div className='star'><img src={star} alt="" />
       <p>{ele.rating}</p></div>
        </div>
      )})}
      
      <div className="view"><Link to={'/det7'}><button>Show Details</button></Link></div>
    </div>


    </div>
    
    </div>
    <div className="card1">
      {card8?.map((ele,i)=>{
      return(
        <div>
       <div className="poster"><img src={ele.image_url} alt="" /></div>
        </div>
      )
    })}
    


    <div >
    {card8?.map((ele,i)=>{
      return(
        <div className="nameofwriter">
       <p> {ele.authors}</p>
        </div>
      )
    })}
    <div>
    {card8?.map((ele,i)=>{
      return(
        <div className='details'>
       <div className="star"><img src={open} alt="" />
       <p>{ele.num_pages}</p></div>
       <div className='star'><img src={star} alt="" />
       <p>{ele.rating}</p></div>
        </div>
      )})}
      
      <div className="view"><Link to={'/det8'}><button>Show Details</button></Link></div>
    </div>


    </div>
    
    
    </div>
 
    </div>

    </div>
    </div>
  )
}

export default Select