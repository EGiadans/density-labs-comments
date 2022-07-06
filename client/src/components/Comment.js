import React, { useState } from "react";
import { connect } from 'react-redux'
import { updateComment, deleteComment } from '../actions/actionCreators';
import { update, remove } from '../services/commentsService';


function Comment(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState(props.message);

    const handleSaveEdit = () => {
        putComment(props.id, message);
        setIsEditing(!isEditing);
        setMessage('');
    }
    
    const putComment = (id, message) => {   
        update(id, message)
            .then(res => props.dispatch(updateComment(id, message)))
    }

    const removeComment = (id) => {    
        remove(props.id)
            .then(res => props.dispatch(deleteComment(id)))
    }

    return (
        <div>
            <h5>{props.email}</h5>
            { !isEditing ?
                <div>
                    <p>{props.message}</p>
                    <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
                    <button onClick={() => removeComment(props.id, props.message)}>Delete</button>
                </div>
            :
            <div>
                <input value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={() => handleSaveEdit()}>Save</button>
                <button onClick={() => setIsEditing(!isEditing)}>Cancel</button>
            </div>
            }
            
        </div>
    )
}

export default connect()(Comment);