import React from "react"
import { useHistory,} from "react-router-dom/cjs/react-router-dom.min";
import { createDeck } from "../utils/api";

function CreateDeck({ newDeck, setNewDeck }) {


  const history= useHistory()

  
  const submitHandler = async (event) => {
    event.preventDefault();
    createDeck(newDeck).then(history.push("/")).then(history.go(0))
  };

  const changeHandler = ({ target }) => {
    setNewDeck({ ...newDeck, [target.name]: target.value });
  };

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
                  class="bi bi-house-door-fill"
                  viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
          </ol>
        </nav>
        <h1>Create Deck</h1>
        <div className="mb-3">
          <label for="name" className="form-label">Name</label>
          <input
            type="name"
            name="name"
            className="form-control"
            id="name"
            value={newDeck.name}
            onChange={changeHandler}
            placeholder="Deck Name" />
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">Description</label>
          <textarea
            type="description"
            name="description"
            className="form-control"
            id="description"
            rows="3"
            value={newDeck.description}
            onChange={changeHandler}
            placeholder="Brief description of the deck">
          </textarea>
        </div>
        <div className="d-grid gap-2 d-md-flex mb-4">
        <a className="btn btn-secondary mx-1" href="/" type="button">Cancel</a>
        <button className="btn btn-primary mx-1" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default CreateDeck