import React from 'react'
import Comment from './Comment';

function CommentList(props) {
    return(
        <div>
            <ul>
                {props.comments.map(comment => {
                    return (
                        <li>
                            <Comment key={comment.id} id={comment.id} message={comment.message} email={comment.email}/>
                            <hr/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default CommentList;