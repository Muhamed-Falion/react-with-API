import './DidStyle.css'

const Did = ({Theme,setTheme}) => {
  const toggle_mode=()=>{
    Theme=='light'? setTheme('dark'): setTheme('light')
  }

  return (
    <div className={Theme=='light'? "did":"blackdid"}>
    <div className="right">
    <div className="you"><h1>Did you know us?</h1></div>
    <div className="det">
        <p>We are about books and our purpose is to show you the book who can <br />
        chage your life or distract you from the real world în a better one. BWorld <br />
        works with the must popular publishs just for your delight. <br />
        If you are about books, you must to subscribe to our newsletter. </p>
    </div>
    <div className="yourdata">
        <div className="yourname"><p>Your name </p></div>
        <div className="line"></div>
        <div className="email"><p>Your e-mail</p></div>
        <div className="line"></div>
    </div>
    <div className="view3"><button>Subscribe</button></div>

    </div>
    <div className="damas">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.53242329597!2d36.20032250905267!3d33.50744811157151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C%20Syria!5e0!3m2!1sen!2s!4v1705150398043!5m2!1sen!2s" ></iframe>
    </div>
    <div className="line2"></div>
    <div className={Theme=='light'? "copy":"blackcopy"}>
        <p>© All copyrights are reserved. B-World 2022. </p>
    </div>


    </div>
  )
}

export default Did