import { LOAD_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../actions/actionTypes';

function commentsReducer(state = [], action) 
{
    switch(action.type) {
        case LOAD_COMMENTS:
            return action.comments;

        case ADD_COMMENT:
            return [
                {
                    id: action.id,
                    message: action.message,
                    email: action.email
                },
                ...state
            ];

        case UPDATE_COMMENT:
            return state.map(comment => (comment.id === action.index) 
                  ? {...comment, message: action.message}
                  : comment
            );

        case DELETE_COMMENT:
            return state.filter(comment => comment.id !== action.index);

        default:
            return state;    
    }
}

export default commentsReducer