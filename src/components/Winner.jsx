import "../styles/Winner.css"
import paimon from "../assets/paimon.webp"

function Winner() {
  return (
    <div className='winner-container'>
        <img className="paimon-img-win" src={paimon} alt="Big Paimon" />
        <div className="win-message">You win! <br/>  Congratulations Traveler!</div> 
    </div>
  )
}

export default Winner