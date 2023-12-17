import React, {useEffect} from "react";
import CardForm from "./CardForm";
import { useParams, useHistory} from "react-router-dom"
import { readCard, updateCard } from "../utils/api";

function EditCard({newCard, setNewCard, deckId, deckData, setDeckData}) {
  const history= useHistory()

    const {cardId} = useParams()

    useEffect(() => {
       async function loadCard() {
        try {
          const updateCard= await readCard(cardId)
          setNewCard(updateCard)
        }
        catch(error) {
          throw new Error(`readCard${cardId} had an error:${error}`)
        }
      }
        loadCard()
    },[cardId, setNewCard])

    async function submitHandler(event) {
        event.preventDefault()
        await updateCard({
          ...newCard,
          id: newCard.id,
          front: newCard.front,
          back: newCard.back,
        })
        
        history.goBack()
    }
    const changeHandler = ({target}) => {
      setNewCard(newCard => ({...newCard, [target.name]: target.value}))
  }
   

    if(deckData.id) {
    return (
    <div>
    <form onSubmit={submitHandler}>
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
              Deck: {deckData.name}
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page"> {`Edit Card: ${cardId}`}</li>
        </ol>
      </nav>
      <h1>Edit Card</h1>
      <CardForm newCard={newCard} setNewCard={setNewCard} changeHandler={changeHandler}/>
      <div className="d-grid gap-2 d-md-flex mb-4">
         <a className="btn btn-secondary mx-1" href={`/decks/${deckId}`} type="button">Cancel</a>
         <button className="btn btn-primary mx-1" type="submit">Submit</button>
      </div>
    </form>
  </div>
    )
    }
    return "Loading Page"
}

export default EditCard