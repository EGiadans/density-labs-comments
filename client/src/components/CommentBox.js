import React, { useState } from "react";
import { connect } from 'react-redux'
import { addComment } from '../actions/actionCreators';
import { create } from '../services/commentsService';

function CommentBox(props) {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('')
        setMessage('')
        createComment({email, message})
    } 

    const createComment = (comment) => {
        create(comment)
           .then(res => props.dispatch(addComment(res[0], comment.message, comment.email)))
           .catch(error => console.log(error))
    }
    
    return (
        <div>
            <form>
                <h1>Leave comments</h1>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <textarea placeholder="Add a comment..." value={message} onChange={(e) => setMessage(e.target.value)}/>
                <br/>
                <button onClick={(e) => handleSubmit(e)}>Comment</button>
            </form> 
        </div>
    );
}

export default connect()(CommentBox);