import { useState, useEffect, useContext } from "react"
import '../styles/CardStyle.css'
import backside from "/back-card.webp"

function Card({ name, id, img, onClickFunctions, isFlipped}) {
    
    const cardClasses = `${isFlipped ? 'card-flipped card' : "card"}`

    return (
        <div className={cardClasses} onClick={onClickFunctions} id={id}>
            <div className="card-inner">
                <div className="card-front">
                    <img src={img} alt={name} />
                    <div className="card-name">
                        {name}
                    </div>
                </div>
                <div className="card-back">
                    <img src={backside} alt="backside-card" />
                </div>
            </div>
        </div>
    )
}

export default Card