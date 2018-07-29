import { combineReducers } from 'redux';

import RecipeReducer from './RecipeReducer';
import Fetching from './Fetching';


export default combineReducers({
    recipes: RecipeReducer,
    fetching: Fetching,
});

