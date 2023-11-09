import { createContext, useState } from 'react'
import './App.css'
import BackgroundMain from './components/BackgroundMain'
import Paimon from './components/Paimon'
import TitleStart from './components/TitleStart'
import {makeCharactersObj, makeDisplayCardsArray} from "./helperFunctions"
import CardDisplay from './components/CardDisplay'

export const StageContext = createContext()

function App() {        

    const [stage, setStage] = useState("start")

    const characters = makeCharactersObj(7,0,29)
    let arrayOfUnclicked = characters
    let arrayOfClicked = []
    const displayCards = makeDisplayCardsArray(arrayOfClicked,arrayOfUnclicked)

    return (
    <StageContext.Provider value={{stage, setStage}}>
        <BackgroundMain />
        { (stage !== "start") && <Paimon />}

        <div className="content">
            <TitleStart />

            {(stage === "ingame") && 
            <CardDisplay 
                selectedChracters={displayCards}
            />}    
            

        </div>
    </StageContext.Provider>
    
    )
}
export default App
