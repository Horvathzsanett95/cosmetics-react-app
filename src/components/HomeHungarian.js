import React from 'react'
import mainPicture from '../assets/mainPicture.jpeg';

export default function HomeHungarian() {

    const mainPictureStyle = {
        diplay: "inline-block",
        width: "300px",
        float: "left",
        borderRadius: "5%"
    }

    return (
        <div>
            
            <img src={mainPicture} alt="about cosmetics"style={mainPictureStyle}></img>
            <div className="Page-Content">
                <h1 style={{textAlign: "center"}}>Üdvözöllek</h1>
            </div>
        </div>
    )
}
