import Card from "./Card"
import { useState, useEffect } from "react"
import { makeCharactersObj, makeDisplayCardsArray } from "../helperFunctions"


function CardDisplay({ selectedChracters }) {

    const [isFlipped, setIsFlipped] = useState(true)

    useEffect(() => {
        setIsFlipped(false)
    }, [])

    function onClickFunctions() {
        setIsFlipped(!isFlipped)
    }

    

    return (
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


    )
}

export default CardDisplay