import { createContext, useEffect, useState } from 'react'
import './App.css'
import BackgroundMain from './components/BackgroundMain'
import Paimon from './components/Paimon'
import TitleStart from './components/TitleStart'
import {makeCharactersObj, makeDisplayCardsArray} from "./helperFunctions"
import CardDisplay from './components/CardDisplay'
import Winner from './components/Winner'
import Loser from './components/Loser'
import RoundCount from './components/RoundCount'
import HighestScore from './components/HighestScore'

export const StageContext = createContext()
let characters = makeCharactersObj(7,0,29)

function App() {        

    const [stage, setStage] = useState("start")
    const [arrClicked, setArrClicked] = useState([])
    const [arrUnclicked, setArrUnclicked] = useState(characters)
    const [round, setRound] = useState(1)
    const [highestScore, setHighestScore] = useState(0)

    function removeCharacterFromArr(id) {
        const filteredArray = arrUnclicked.filter((obj) => {
            // console.log(`${char.id} and ${id} ${char.id === parseInt(id)}`)
            return !(obj.id === parseInt(id))
        })
        setArrUnclicked(filteredArray)
    }

    function addCharacterToClickedArr(id) {
        const foundCharacter = arrUnclicked.find((char) => {
            // console.log(`${char.id} and ${id} ${char.id === parseInt(id)}`)
            return char.id === parseInt(id)
        })
        setArrClicked((prevArrClicked) => [...prevArrClicked, foundCharacter])
    }

    function resetGame() {
        characters = makeCharactersObj(7,0,29)
        setArrUnclicked(characters)
        setArrClicked([])
        setStage("ingame")
    }

    const displayCards = makeDisplayCardsArray(arrClicked, arrUnclicked)

    useEffect(() => {
        if (arrUnclicked.length === 0) {
          setStage("winner");
        }
    }, [arrUnclicked]);

    useEffect(() => {
        const score = 0
        setRound(arrClicked.length)
        setHighestScore(prev => Math.max(prev,round-1, arrClicked.length))
    }, [arrClicked])


    return (
    <StageContext.Provider value={{stage, setStage}}>
        <BackgroundMain />
        { (stage === "ingame") && <Paimon />}

        <div className="content">
            <TitleStart />

            {(stage !== "start") && 
            <HighestScore
                highestScore={highestScore} 
                score={round}    
            />
            }

            {(stage === "ingame") && 
            <CardDisplay 
                arrClicked = {arrClicked}
                selectedChracters={displayCards}
                removeCharacterFromArr={removeCharacterFromArr}
                addCharacterToClickedArr={addCharacterToClickedArr}
            />}    
            {(stage === "ingame") && 
            <RoundCount 
                round={round}    
            />
            }

            {(stage === "winner") && 
                <Winner
                    resetGame={resetGame}
                />
            }


            {(stage === "loser") && 
                <Loser 
                    resetGame={resetGame}
                />
            }
            

        </div>
    </StageContext.Provider>
    
    )
}
export default App
