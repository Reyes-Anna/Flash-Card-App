import React, {useEffect}from "react";
import { listDecks } from "../utils/api";

function Home({decks, setDecks, deleteDeckHandler}) { 
  

  useEffect(() => {
    async function loadDecks() {
     await listDecks().then((loadDeckList) => setDecks(loadDeckList))
    }
    loadDecks()
  },[setDecks])

return (
  

  <div>
    <a 
      className="btn btn-secondary mb-2" 
      href="/decks/new" 
      role="button">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        fill="currentColor" 
        className="bi bi-plus-lg" 
        viewBox="0 0 16 16"
        >
        <path 
          fillRule="evenodd" 
          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
        />
      </svg>
      Create Deck
    </a>
    <div>
      {decks.map((deck, index) => (
      <div className="card mb-4" key={deck.id}>
            <div className="card-body">
              <div className="row">
                <h5 className="card-title col">{deck.name}</h5>
                <p className="card-text text-right col">{`${deck.cards.length} cards`}</p>
              </div>
                <p className="card-text">{deck.description}</p>
                <a 
                  type="button" 
                  href={`decks/${deck.id}`}
                  className="btn btn-secondary">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      fill="currentColor" 
                      className="bi bi-eye-fill" 
                      viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                    </svg>
                  View
                </a>
                <a 
                    className="btn btn-primary mx-1" 
                    href = {`decks/${deck.id}/study`} 
                    type="button">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            fill="currentColor" 
                            className="bi bi-bookmark-fill" 
                            viewBox="0 0 16 16">
                        <path 
                            d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"
                        />
                        </svg>
                     Study
                </a>
                <button 
                    className="btn btn-danger mx-1 float-right" 
                    type="button"
                    onClick={() => deleteDeckHandler(deck.id)}
                >
                    <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            fill="currentColor" 
                            className="bi bi-trash3-fill" 
                            viewBox="0 0 16 16">
                    <path 
                    d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
                    />
                    </svg>
                </button>
          </div>
      </div>
      ))}
    </div>
  </div>
)
}

export default Home