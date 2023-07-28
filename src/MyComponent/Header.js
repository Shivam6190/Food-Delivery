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
          <img src='https://www.creativehatti.com/wp-content/uploads/2021/04/Food-Delivery-Logo-Template-18-small.jpg' alt="rest-pic"/>
          
          <ul className="info">
            <li ><Link style={{textDecoration: 'none'}} to="/">Home</Link></li>
            <li><Link style={{textDecoration: 'none'}} to="/about">About</Link></li>
            <li><Link style={{textDecoration: 'none'}} to="/contact">Contact</Link></li>
            <li><button onClick={(e) =>{updateLoginLogoutText()}} className="login-button">{buttonText}</button></li>
          
          </ul>

          
  
  
        </nav>
  
  
      
      
    );
};

export default HeaderComponet;

//export default Component returns a single component
