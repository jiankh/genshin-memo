import { createContext, useState } from 'react'
import './App.css'
import BackgroundMain from './components/BackgroundMain'
import Controls from './components/Controls'
import Paimon from './components/Paimon'
import TitleStart from './components/TitleStart'
import Card from './components/Card'

export const StageContext = createContext()

function App() {    

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    function getRandomArray() {
        let numbers = new Set()
        while (numbers.size < 10) {
        numbers.add(getRandomIntInclusive(0,24))
        }
        
        return Array.from(numbers)
    }
    
    
    


    const [stage, setStage] = useState("start")
    

    return (
    <StageContext.Provider value={{stage, setStage}}>
        <BackgroundMain />
        { (stage !== "start") && <Paimon />}
        <div className="content">
            <TitleStart />
            <Card />
        </div>
        {console.log(getRandomArray())}
    </StageContext.Provider>
    
    )
}
export default App
