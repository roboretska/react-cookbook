import React, {Component} from 'react';
import {Button, Card, Image, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import './RecipeBlock.css'
import PropTypes from 'prop-types';




export default function RecipeContainer(props) {


    const recipe=props.item;
    const deleteFunc=props.deleteFunc;

    return (

        <Card fluid>
            <Card.Content>
                <ListButton recipe={recipe} deleteFunc={props.deleteFunc}/>
                <Card.Header>{recipe.title}</Card.Header>
                <Card.Description>{recipe.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                {recipe.createdAt}
            </Card.Content>
        </Card>
    )
}

const DeleteButton = (props) => (
    <Button circular icon='trash' negative onClick={()=>{props.onClickFunction(props.id, props.deleteFunc)}}/>
);

const EditButton = () => (
    <Button circular icon='pencil alternate'/>
);

const WatchButton = () => (
    <Button circular icon='eye'/>
);

const ListButton = (props) => (
    <Card.Meta className='button-wrapper'>
        {window.location.pathname === '/recipes' && <Link to={`/${props.recipe._id}`}><WatchButton/></Link>}
        <Link to={`/${props.recipe._id}/edit`}><EditButton/></Link>
        <DeleteButton onClickFunction={deleteRecipeClick} id={props.recipe._id} deleteFunc={props.deleteFunc}/>
    </Card.Meta>
);

function deleteRecipeClick(id, func) {
    console.log(id);
    console.log(func);
    func(id);

}

RecipeContainer.propTypes={
    item: PropTypes.object
};

RecipeContainer.defaultProps={
    item: {}
};

ListButton.propTypes={
    recipe: PropTypes.object,
    deleteFunc: PropTypes.function
};

ListButton.defaultProps={
    recipe: {}
};