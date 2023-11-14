import Card from "./Card"
import { useState, useEffect, useContext } from "react"
import { checkIfClicked } from "../helperFunctions"
import { StageContext } from "../App"


function CardDisplay({ selectedChracters, removeCharacterFromArr,addCharacterToClickedArr, arrClicked }) {

    const setStage = useContext(StageContext).setStage

    const [isFlipped, setIsFlipped] = useState(true)

    useEffect(() => {
        setIsFlipped(false)
    }, [])

    function onClickFunctions(e) {
        setIsFlipped(true)
        const idOfCurrent = e.currentTarget.id

        if (checkIfClicked(idOfCurrent, arrClicked)) { return setStage("loser") }

        // if idOfCurrent is in the arr of clicked then end game "lose"

        console.log(`current target id: ${e.currentTarget.id}`)

        setTimeout(() => {
            console.log(`current target id: ${idOfCurrent}`)
            addCharacterToClickedArr(idOfCurrent);
            removeCharacterFromArr(idOfCurrent);

        }, 1500);
        
        //update cards
        setTimeout(()=> {
            setIsFlipped(false)
        }, 2000)
        
    }

    return (
        ((selectedChracters) && (
            <div className="card-container">
            {selectedChracters.map((character) => (
                <Card
                    isFlipped={isFlipped}
                    onClickFunctions={onClickFunctions}
                    key={character.id}
                    name={character.name}
                    id={character.id}
                    img={character.img}
                />
            ))
            }

            </div>
        ))
        


    )
}

export default CardDisplay