import React, {useEffect} from "react";
import Home from "./Home";
import { readDeck } from "../utils/api/index";
import EditDeck from "./EditDeck"; 
import Study from "./Study"
import AddCard from "./AddCard"
import EditCard from "./EditCard";
import DeckView from "./DeckView";
import { deleteCard } from "../utils/api/index";
import { Switch, Route, useRouteMatch, useParams} from "react-router-dom";


function Deck({deckData, setDecks, setDeckData, currentCard, setCurrentCard, displayCardFront, setDisplayCardFront, newCard, setNewCard, deleteDeckHandler, initalCardFormState}) {



const {url} = useRouteMatch()
const {deckId}= useParams()

useEffect(() => {
    async function loadDeck() {
        await readDeck(deckId).then((updateDeck) => setDeckData(updateDeck))
    }
    loadDeck()
},[deckId, setDeckData]) 

const deleteCardHandler= (cardId) => {
  if (window.confirm("Delete this card?\n\nYou will not be able to recover it")) {
    deleteCard(cardId)
    setDeckData((deckData) => 
    deckData.cards.filter((card)=> card.id !== cardId))
}
}




return (
    <div>
        <Switch>
            <Route  exact path = "/">
                <Home />
            </Route>
            <Route exact path = {`${url}`}>
                <DeckView deckId={deckId} deckData={deckData} deleteCardHandler={deleteCardHandler}/>
            </Route>
            <Route  exact path ={`${url}/edit`}>
                <EditDeck 
                    setDeckData={setDeckData}
                    deckId={deckId} 
                    deckData={deckData}/>
            </Route>
            <Route path ={`${url}/study`}>
                <Study 
                    deckId={deckId} 
                    deckData={deckData}
                    currentCard={currentCard}
                    setCurrentCard={setCurrentCard}
                    displayCardFront={displayCardFront}
                    setDisplayCardFront={setDisplayCardFront}
                />
            </Route>
            <Route path = {`${url}/cards/new`}>
                <AddCard 
                    deckId={deckId} 
                    deckData={deckData} 
                    setDeckData={setDeckData}
                    newCard={newCard}
                    setNewCard={setNewCard}
                    initalCardFormState={initalCardFormState}/>
            </Route>
            <Route path={`${url}/cards/:cardId/edit`}>
                <EditCard 
                    deckId={deckId} 
                    deckData={deckData}
                    setDeckData={setDeckData}
                    newCard={newCard}
                    setNewCard={setNewCard}
                    initalCardFormState={initalCardFormState}/> 
            </Route>
        </Switch>
        

    </div>
    )
}

export default Deck