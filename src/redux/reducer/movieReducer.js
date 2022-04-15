import { AllMOVIES } from '../types/moviesType'

const initalValue = { movies: [], pageCount: 0 }

export const moviesReducer = (state = initalValue, action) => {
    switch (action.type) {
        case AllMOVIES:
            return { movies: action.data, pageCount: action.pages }
        default:
            return state;
    }
}


/* 
dispatch({type:'AllMOVIES' , data:[]})
*/