import React from "react";
import StudyCards from "./StudyCard";


function Study({deckId, deckData}) {

    const deckCards= deckData.cards

    if(deckData.id) {
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    fill="currentColor" 
                                    className="bi bi-house-door-fill" 
                                    viewBox="0 0 16 16">
                                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                                </svg>
                                Home
                            </a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href={`/decks/${deckId}`}>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    fill="currentColor" 
                                    className="bi bi-house-door-fill" 
                                    viewBox="0 0 16 16">
                                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                                </svg>
                                {deckData.name}
                            </a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Study</li>
                    </ol>
                </nav>
                <h2> Study: {deckData.name} </h2>
                    {deckCards.length <= 2 ? (
                        <div>
                            <h3>Not enough cards.</h3>
                            <p>You need at least 3 cards to study. There are {deckCards.length} cards in this deck.</p>
                            <a 
                                className="btn btn-primary mx-1" 
                                href ={`/decks/${deckId}/cards/new`} 
                                type="button">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="16" 
                                        height="16" 
                                        fill="currentColor" 
                                        className="bi bi-plus-lg" 
                                        viewBox="0 0 16 16"
                                    >
                                    <path 
                                        fill-rule="evenodd" 
                                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                                    />
                                    </svg>
                                Add Cards
                            </a>
                        </div>
                    ): <StudyCards deckCards={deckCards} />
                        
                    }   
            </div>
        
        )
    }
    return "Page Loading"
}

export default Study