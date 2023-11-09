import { useState } from "react"
import raiden from "../assets/characters/raiden.png"
import '../styles/CardStyle.css'
import backside from "/back-card.webp"

function Card({ name, id, img }) {

    const [isFlipped, setIsFlipped] = useState(true)
    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    const cardClasses = `${isFlipped ? 'card-flipped card' : "card"}`

    return (
        <div className={cardClasses} onClick={toggleFlip}>
            <div className="card-inner">
                <div className="card-front">
                    <img src={raiden} alt="raiden" />
                    <div className="card-name">
                        Raiden
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