import React from 'react'

function HighestScore({highestScore, score}) {
  return (
    <div className='scoreboard'>
        
        <div className="|">Highest Score: {highestScore}</div>
        <div className="current-score-container">Current Score: {score}</div>

    </div>
  )
}

export default HighestScore