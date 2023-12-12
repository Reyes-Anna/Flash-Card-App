import React, {useState, useEffect} from "react";
import Home from "./Home";
import { readDeck } from "../utils/api/index";
import EditDeck from "./EditDeck"; 
import Study from "./Study"
import AddCard from "./AddCard"
import EditCard from "./EditCard";
import DeckView from "./DeckView";
import { deleteCard } from "../utils/api/index";
import { Switch, Route, useRouteMatch, useHistory, useParams} from "react-router-dom";


function Deck({deleteDeckHandler}) {

const initalCardFormState = {
    front: "",
    back: "",
}

const history= useHistory()
const {url} = useRouteMatch()
const {deckId}= useParams()
const [deckData, setDeckData] = useState({})
const [newCard, setNewCard]= useState(initalCardFormState)

useEffect(() => {
    function loadDeck() {
        readDeck(deckId).then((updateDeck) => setDeckData(updateDeck))
    }
    loadDeck()
}, [deckId])

const deleteCardHandler= (cardId) => {
  if (window.confirm("Delete this card?\n\nYou will not be able to recover it")) {
    deleteCard(cardId).then(history.push(`/decks/${deckId}`)).then(history.go(0))
  } 
  else {
    history.push("/")}
}


return (
    <div>
        <Switch>
            <Route  exact path = "/">
                <Home />
            </Route>
            <Route exact path = {`${url}`}>
                <DeckView deckId={deckId} deckData={deckData} deleteCardHandler={deleteCardHandler} deleteDeckHandler={deleteDeckHandler}/>
            </Route>
            <Route  exact path ={`${url}/edit`}>
                <EditDeck deckId={deckId} deckData={deckData}/>
            </Route>
            <Route path ={`${url}/study`}>
                <Study deckId={deckId} deckData={deckData}/>
            </Route>
            <Route path = {`${url}/cards/new`}>
                <AddCard deckId={deckId} deckData={deckData} newCard={newCard} setNewCard={setNewCard}/>
            </Route>
            <Route path={`${url}/cards/:cardId/edit`}>
                <EditCard deckId= {deckId} deckData={deckData}/> 
            </Route>
        </Switch>
        

    </div>
    )
}

export default Deck