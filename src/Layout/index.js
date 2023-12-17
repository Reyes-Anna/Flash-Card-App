import React, {useState} from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeck from "../decks/CreateDeck";
import Home from "../decks/Home"
import Deck from "../decks/Deck"
import { deleteDeck } from "../utils/api";

import { Switch, Route} from "react-router-dom";

function Layout() {
  const initalDeckFormState = {
    name: "",
    description: "",
    cards: "",
  }
  const initalCardFormState = {
    front: "",
    back: "",
}
  const [decks, setDecks] = useState([])
  const [newDeck, setNewDeck] = useState(initalDeckFormState)
  const [newCard, setNewCard] = useState(initalCardFormState)
  const [currentCard, setCurrentCard] = useState(0)
  const [displayCardFront, setDisplayCardFront] = useState(true)
  const [deckData, setDeckData] = useState({})



  const deleteDeckHandler = (deckId) => {
    if (window.confirm("Delete this deck? \n\nYou will not be able to recover it.")) {
      deleteDeck(deckId)
      setDecks((deckData) => 
      deckData.filter((deck)=> deck.id !== deckId))
      }
    }
  
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            < Home decks={decks} setDecks={setDecks} deleteDeckHandler={deleteDeckHandler}/>
          </Route>
          <Route path="/decks/new">
            < CreateDeck newDeck={newDeck} setNewDeck={setNewDeck}/>
          </Route>
          <Route path= "/decks/:deckId">
            < Deck
                setDecks={setDecks}
                newCard={newCard}
                setNewCard={setNewCard}
                deleteDeckHandler={deleteDeckHandler}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
                displayCardFront={displayCardFront}
                setDisplayCardFront={setDisplayCardFront}
                deckData={deckData}
                setDeckData={setDeckData}
                initalCardFormState={initalCardFormState}/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
