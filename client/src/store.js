import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore() {
  // TODO: Update 'createStore' method to use 'configureStore' from @redux-toolkit
    return createStore(
      rootReducer,
      applyMiddleware(thunk)
    )
}