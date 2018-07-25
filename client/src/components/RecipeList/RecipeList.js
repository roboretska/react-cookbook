import React from 'react';
import {Card} from 'semantic-ui-react';

import RecipeBlock from './RecipesBlock';

import './RecipeList.css';
import * as actions from "../../actions";
import store from "../../store";

export default  function RecipeList() {
    console.log(store.getState());
    store.dispatch(actions.getAllRecipes());
    console.log(store.getState());

    return(
        <Card.Group itemsPerRow={2} className="recipe-list-wrapper">
            <RecipeBlock/>
            <RecipeBlock/>
            <RecipeBlock/>
        </Card.Group>
    )
}