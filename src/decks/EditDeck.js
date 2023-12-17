import React, {useEffect }from "react";
import { readDeck, updateDeck } from "../utils/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function EditDeck({setDeckData, deckId, deckData}) {
const history= useHistory()
  
async function submitHandler(event) {
   event.preventDefault()
   await updateDeck({
    ...deckData
  })
  history.push(`/decks/${deckId}`)
}
const deckChangeHandler = ({target}) => {
    setDeckData ({ ...deckData, [target.id]: target.value });
  };

  console.log({...deckData})

useEffect (() => {
  async function getDeck() {
    try {
      const updateDeck = await readDeck(deckId)
      setDeckData(updateDeck)
    }
    catch (error) {
      throw new Error(`readDeck(${deckId} had an error: ${error})`)
    }
    }
    getDeck()
},[deckId, setDeckData])

if(deckData) {
return (
  <div>
    <form onSubmit = {submitHandler}>
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
          <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
        </ol>
      </nav>
      <h1>Edit Deck</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
          type="name" 
          name="name"
          className="form-control" 
          id="name" 
          value={deckData.name}
          onChange={deckChangeHandler}
          placeholder="Deck Name"/>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea 
          type="description"
          name="description"
          className="form-control" 
          id="description" 
          rows="3" 
          value={deckData.description}
          onChange={deckChangeHandler}
          placeholder="Deck description">
        </textarea>
      </div>
      <div className="d-grid gap-2 d-md-flex mb-4">
        <a className="btn btn-secondary mx-1" href={`/decks/${deckId}`} type="button">Cancel</a>
        <button className="btn btn-primary mx-1" type="submit">Submit</button>
      </div>
    </form>
  </div>
  )
}
 return "Page Loading"
}

export default EditDeck