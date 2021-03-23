import React from 'react';
import fbLogo from '../assets/fblogo.jpg';
import igLogo from '../assets/iglogo.jpg';
import contactPicture from '../assets/ResourcePicture.jpeg';
import './Contact.css';

export default function ContactHungarian() {
    const logoStyle = {
        display: 'inline-block', 
        width: "40px",
        height: "40px",
    }

    const linkStyle = {
        display: 'inline-block'   
    }

    return (
        
        <div style={{width: '1100px'}}>
            <img src={contactPicture} alt="about cosmetics"style={{diplay: "inline-block",width: "465px",float: "left", padding: '10px'}}></img>
            <div style={{ display: 'inline-block', padding: '10px'}}>
            <header style={{textAlign: 'center'}}>ELÉRHETŐSÉGEIM:</header>
            <div>
            <img src={fbLogo} alt="Facebook logo" style={logoStyle}></img>
            <p style={linkStyle}>Kozmetika - Fodor Viktória</p>
            </div>
            <div>
            <img src={igLogo} alt="Facebook logo" style={logoStyle}></img>
            <p style={linkStyle}>#fodor.viktoria_kozmetika</p>
            </div>
            </div>
            <div style={{float: 'left', border: 'solid'}}>
            <header>KÜLDJ EMAILT</header>
        <div style={{width:"470px", textAlign: 'center'}}>
            <p>Ha kérdésed van vedd fel velem a kapcsolatot. A megadott mezőbe add meg az email címed, és arra válaszolok neked a kért információval kapcsolatban amint tudok.</p>
            </div>

        <form id="form" class="topBefore">
		
		  <input id="name" type="text" placeholder="NAME"></input>
		  <input id="email" type="text" placeholder="E-MAIL"></input>
		  <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
            <input id="submit" type="submit" value="GO!"></input>
  
        </form>
        </div>
        
        </div>
    )
}
