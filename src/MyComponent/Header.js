import { useState } from "react";
import { Link } from "react-router-dom";


const HeaderComponet = () =>{
    
  const [buttonText, setButtonText]= useState("Login");

  function updateLoginLogoutText(){


    if(buttonText === "Login"){
      setButtonText("Logout")
    }
    else{
      setButtonText("Login")
    }
    
  }




    return (
      
        <nav className='nav-bar'>
          <img src="https://www.creativehatti.com/wp-content/uploads/2021/04/Food-Delivery-Logo-Template-18-small.jpg"></img>
          
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <button onClick={(e) =>{updateLoginLogoutText()}} className="login-button">{buttonText}</button>
  
  
        </nav>
  
  
      
      
    )
}

export default HeaderComponet;

//export default Component returns a single component
