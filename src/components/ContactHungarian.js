import React from 'react';
import fbLogo from '../assets/fblogo.jpg';
import igLogo from '../assets/iglogo.jpg';

export default function ContactHungarian() {
    const logoStyle = {
        float: "left",
        width: "40px",
        height: "40px"
    }
    
    const contactPageStyle = {
        display: 'flex', 
        justifyContent:'center'
    }

    return (
        <div>
            <div style={contactPageStyle}>
            <img src={fbLogo} alt="Facebook logo" style={logoStyle}></img>
            
            <p>Kozmetika - Fodor Viktória</p>
            </div>
            <div style={contactPageStyle}>
            <img src={igLogo} alt="Facebook logo" style={logoStyle}></img>
            
            <p>#fodor.viktoria_kozmetika</p>
            </div>
        </div>
    )
}
