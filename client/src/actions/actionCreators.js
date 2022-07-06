import { LOAD_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from './actionTypes';

export function loadComments(comments) {
    return { type: LOAD_COMMENTS, comments: comments }
}

export function addComment(id, message, email) {
    return { type: ADD_COMMENT, id: id, message: message, email: email }
}

export function updateComment(index, message) {
    return { type: UPDATE_COMMENT, index: index, message: message }
}

export function deleteComment(index) {
    return { type: DELETE_COMMENT, index: index }
}