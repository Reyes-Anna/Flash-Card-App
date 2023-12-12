import React from "react";

function CardForm(props) {
    const {newCard, setNewCard} = props
    const changeHandler = ({target}) => {
        setNewCard({...newCard, [target.name]: target.value})
    }

    return (
        <div>
            <div className="mb-3">
                <label for="front" className="form-label">Front</label>
                <textarea 
                    type="front" 
                    name="front"
                    className="form-control" 
                    id="front" 
                    rows="3"
                    value={newCard.front}
                    onChange={changeHandler}
                    placeholder="pre-load front text"/>
            </div>
            <div className="mb-3">
                <label for="back" className="form-label">Description</label>
                <textarea 
                    type="back"
                    name="back"
                    className="form-control" 
                    id="back" 
                    rows="3" 
                    value={newCard.back}
                    onChange={changeHandler}
                    placeholder="pre-load back text">
                </textarea>
            </div>
                
    </div>
    )
}

export default CardForm