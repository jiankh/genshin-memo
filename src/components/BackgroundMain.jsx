import React, { useState } from 'react'
import genshinbg from "../assets/genshinHD60.mp4"
import genshinlogo from "../assets/genshinlogo.png"

function BackgroundMain() {

    const [gameStarted, setGameStarted] = useState(false)
    function handleLogoStart() {
       setGameStarted(true)
    }

    const logoStyle = {
        transition: "transform 1s",
        transform: gameStarted ? "translateY(-36%)" : "translateY(0)"
    }

    return (
        <div className="background-main-container">
            <video src={genshinbg} autoPlay loop muted ></video>
            <div className="logo" style={logoStyle}>
                <img src={genshinlogo} alt="logo" />

                {(!gameStarted) && 
                <button onClick={handleLogoStart} className='start-btn'>CLICK TO BEGIN</button>
                }

            </div>
        </div>
    )
}

export default BackgroundMain