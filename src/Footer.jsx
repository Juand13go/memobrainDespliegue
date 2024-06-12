import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className={localStorage.getItem('login') == "logged in" ? "footer" 
      : "footer-login"
    }>
      <div className="footer-div">
        <h2 className="footer-title">About</h2>
        <NavLink className="footer-text" to="#" >What is Memobrain?</NavLink>
      </div>
      <div className="footer-div">
        <h2 className="footer-title">Help</h2>
        <NavLink className="footer-text" to="#" >How to play</NavLink>
      </div>
      <div className="footer-div">
        <h2 className="footer-title">Team 7</h2>
        <NavLink className="footer-text" to="#" >Us</NavLink>
      </div>
      
    </footer>
  );
}

export default Footer;
