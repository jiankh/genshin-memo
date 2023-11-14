import { useContext, useState } from "react"
import genshinlogo from "../assets/genshinlogo.png"
import { StageContext } from '../App.jsx';

function TitleStart() {
    const stage = useContext(StageContext).stage
    const setStage = useContext(StageContext).setStage

    
    function handleLogoStart() {
       setStage("ingame") //CHANGE
    }

    const logoStyle = {
        transition: "transform 1s",
        transform: (stage !== "start") ? `translateY(-40%)` : "translateY(0)"
    }

    return (
        
        <div className="logo" style={logoStyle}>
            <img src={genshinlogo} alt="logo" />
            {(stage === "start") &&
                <button onClick={handleLogoStart} className='start-btn'>CLICK TO BEGIN</button>
            }

        </div>
    )
}

export default TitleStart