
import { createStore ,applyMiddleware } from 'redux'
import { moviesReducer } from '../reducer/movieReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk from 'redux-thunk'
//1-create store
export const store = createStore(moviesReducer, applyMiddleware(thunk));