import React, { useState } from 'react'
import genshinbg from "../assets/genshinHD60.mp4"


function BackgroundMain() {
    
    return (
        <div className="background-main-container">
            <video src={genshinbg} autoPlay loop muted ></video>
        </div>
    )
}

export default BackgroundMain