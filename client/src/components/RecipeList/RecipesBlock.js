import React, {Component} from 'react';
import {Button, Card, Image, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import './RecipeBlock.css'


export default function RecipeContainer(item) {


    const recipe=item.item;
    return (

        <Card fluid>
            <Card.Content>
                <ListButton recipe={recipe}/>
                <Card.Header>{recipe.title}</Card.Header>
                <Card.Description>{recipe.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                {recipe.createdAt}
            </Card.Content>
        </Card>
    )
}

const DeleteButton = () => (
    <Button circular icon='trash' negative/>
);

const EditButton = () => (
    <Button circular icon='pencil alternate'/>
);

const WatchButton = () => (
    <Button circular icon='eye'/>
);

const ListButton = (recipe) => (
    <Card.Meta className='button-wrapper'>
        {window.location.pathname === '/recipes' && <Link to={`/${recipe.recipe._id}`}><WatchButton/></Link>}
        <Link to={`/${recipe.recipe._id}/edit`}><EditButton/></Link>
        <Link to={`/${recipe.recipe._id}/delete`}><DeleteButton/></Link>
    </Card.Meta>
);

function getRecipeById() {

}