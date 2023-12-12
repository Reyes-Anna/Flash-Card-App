import React, {useState} from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeck from "../decks/CreateDeck";
import Home from "../decks/Home"
import Deck from "../decks/Deck"
import { deleteDeck } from "../utils/api";

import { Switch, Route, useHistory} from "react-router-dom";

function Layout() {
  const initalFormState = {
    name: "",
    description: "",
    cards: "",
  }

  const [newDeck, setNewDeck] = useState(initalFormState)

  const history= useHistory()

  const deleteDeckHandler = (deckId) => {
    if (window.confirm("Delete this deck? \n\nYou will not be able to recover it.")) {
      deleteDeck(deckId).then(history.push("/")).then(history.go(0))
    } else {
      history.push("/")
      console.log("Did not delete deck-deleteDeckHandler")
    }
  }
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            < Home  deleteDeckHandler={deleteDeckHandler}/>
          </Route>
          <Route exact path="/decks/new">
            < CreateDeck newDeck={newDeck} setNewDeck={setNewDeck}/>
          </Route>
          <Route path= "/decks/:deckId">
            < Deck deleteDeckHandler={deleteDeckHandler}/>
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
