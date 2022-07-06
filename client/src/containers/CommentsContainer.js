import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadComments } from '../actions/actionCreators';
import CommentBox from '../components/CommentBox';
import CommentList from '../components/CommentList';
import { getAll } from '../services/commentsService';

function CommentsContainer(props) {
  useEffect(() => {
    getComments()
  }, [])

  const getComments = () => {
    getAll()
      .then((res) => props.dispatch(loadComments(res)))
      .catch((err) => console.log(err))
  }
  
  return (
    <div>
        <CommentBox />
        <CommentList comments={props.comments}/>
    </div>)
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps)(CommentsContainer)