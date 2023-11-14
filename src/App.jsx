import { createContext, useEffect, useState } from 'react'
import './App.css'
import BackgroundMain from './components/BackgroundMain'
import Paimon from './components/Paimon'
import TitleStart from './components/TitleStart'
import {makeCharactersObj, makeDisplayCardsArray} from "./helperFunctions"
import CardDisplay from './components/CardDisplay'
import Winner from './components/Winner'
import Loser from './components/Loser'

export const StageContext = createContext()
const characters = makeCharactersObj(7,0,29)

function App() {        

    const [stage, setStage] = useState("start")
    const [arrClicked, setArrClicked] = useState([])
    const [arrUnclicked, setArrUnclicked] = useState(characters)

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

    const displayCards = makeDisplayCardsArray(arrClicked, arrUnclicked)

    useEffect(() => {
        if (arrUnclicked.length === 0) {
          setStage("winner");
        }
    }, [arrUnclicked]);


    return (
    <StageContext.Provider value={{stage, setStage}}>
        <BackgroundMain />
        { (stage === "ingame") && <Paimon />}

        <div className="content">
            <TitleStart />

            {(stage === "ingame") && 
            <CardDisplay 
                arrClicked = {arrClicked}
                selectedChracters={displayCards}
                removeCharacterFromArr={removeCharacterFromArr}
                addCharacterToClickedArr={addCharacterToClickedArr}
            />}    

            {(stage === "winner") && 
                <Winner />
            }

            {(stage === "loser") && 
                <Loser />
            }
            

        </div>
    </StageContext.Provider>
    
    )
}
export default App
