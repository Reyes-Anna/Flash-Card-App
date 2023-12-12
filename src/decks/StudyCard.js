import React, {useState} from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


function StudyCards ({deckCards}) { 
    
    const history= useHistory()

    const [currentCard, setCurrentCard] = useState(0)
    const [displayCardFront, setDisplayCardFront] = useState(true)

    const nextCardHandler = (event) => {
        event.preventDefault()
        if (currentCard === deckCards.length -1) {
            if (window.confirm("Restart cards? \n\nClick Cancel to return to the homepage.")) {
                setCurrentCard(0)
                setDisplayCardFront(true)
            } 
            else {
                history.push("/")
            }
        }
        else {
            setCurrentCard((card) => card + 1 )
            setDisplayCardFront(true)
        }
    }

    const flipCardHandler = (event) => {
        event.preventDefault()
        setDisplayCardFront(!displayCardFront)
    }

    const studyFront = deckCards.map((card, index) => (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">{`Card ${index + 1} of ${deckCards.length}`}</h5>
                <p className="card-text">{card.front}</p>
                <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={flipCardHandler}                    
                >
                Flip
                </button>
            </div>
        </div> 
    ))
        
    const studyBack = deckCards.map((card, index) => (
        <div className="card mb-4">
        <div className="card-body">
            <h5 className="card-title">{`Card ${index + 1} of ${deckCards.length}`}</h5>
            <p className="card-text">{card.back}</p>
            <button 
                type="button" 
                className="btn btn-secondary mx-1"
                onClick={flipCardHandler}
            >
            Flip
            </button>
            <button 
                type="button" 
                className="btn btn-primary mx-1"
                onClick={nextCardHandler}
            >
            Next
            </button>
        </div>
    </div>
))
    

    return (
        displayCardFront ? studyFront[currentCard] : studyBack[currentCard]
    )
    }

export default StudyCards
