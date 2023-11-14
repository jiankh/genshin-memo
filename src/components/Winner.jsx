import "../styles/Winner.css"
import paimon from "../assets/paimon.webp"

function Winner({resetGame}) {

  return (
    <div className='winner-container'>
        <img className="paimon-img-win" src={paimon} alt="Big Paimon" />
        <div className="win-message">
            You win! <br/>  
            Congratulations Traveler! <br/> 
            <button onClick={resetGame} className="play-again-btn">Play Again</button>
        </div> 
    </div>
  )
}

export default Winner