import React from 'react'
import gameover from '../assets/gameover.png'
import "../styles/Gameover.css"

function Loser() {
  return (
    <div className='lose-message message-container'>
        <h1 className='message-middle'><img className='gameover-img' src={gameover} alt="Game Over picture" /></h1>
        <div className='retry-container'>
            <button className='retry-btn' >Retry?</button>
        </div>
    </div>
  )
}

export default Loser