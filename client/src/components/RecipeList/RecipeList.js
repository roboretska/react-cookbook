import React from 'react';
import {Card} from 'semantic-ui-react';

import RecipeBlock from './RecipesBlock';

import './RecipeList.css';

export default  function RecipeList() {
    return(
        <Card.Group itemsPerRow={2} className="recipe-list-wrapper">
            <RecipeBlock/>
            <RecipeBlock/>
            <RecipeBlock/>
        </Card.Group>
    )
}