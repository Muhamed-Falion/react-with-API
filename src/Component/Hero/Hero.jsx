import './HeroStyle.css'
import book from '../../images/book.png'
const Hero = ({Theme,setTheme}) => {
    const toggle_mode=()=>{
      Theme=='light'? setTheme('dark'): setTheme('light')
    }

  return (
    <div className={Theme=='light'? "hero":"darkhero"}>
    <div className="left">
    <div className={Theme=='light'? "author":"authorblack"}><button>Author of august</button></div>
    <div className={Theme=='light'? "etitle":"etitleblack"}><h1>Eric-Emanuel Schmitt </h1></div>
    <div className={Theme=='light'? "edetails":"edetailsblack"}>
        <p>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes <br /> <br /> </p>
        <p>and distinctions, and in 2001 he received the title of Chevalier des Arts <br /> <br /> </p>
        <p>et des Lettres. His books have been translated into over 40 languages.</p>
    </div>
    <div className="view1"><button>View his boook</button></div>
    </div>
    <div className="right">
        <img src={book} alt="" />
    </div>

    </div>
  )
}

export default Hero