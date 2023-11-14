import "../styles/PaimonStyle.css"
import paimon from "../assets/paimon.webp"

function Paimon() {

  return (
    <div className='paimon-container'>
        <pre>Hello Traveler! To play, do not click on the same Character!  </pre>
        <img className="paimon" src={paimon} alt="paimon" />
    </div>
  )
}

export default Paimon