import React from 'react';
import {Button, Card, Image, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import api from '../../api/index';


import 'semantic-ui-css/semantic.min.css';

import './RecipeBlock.css'

export default function RecipeContainer(item) {


console.log(item);
const recipe=item.item;
    return (

        <Card fluid>
            <Card.Content>
                <Card.Meta className='button-wrapper'>
                    <Link to ='/recipe' onClick={api.getAll}><WatchButton/></Link>
                    <Link to='/edit'><EditButton/></Link>
                    <Link to='/delete'><DeleteButton/></Link>
                </Card.Meta>
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
    <Button circular icon='pencil alternate'  />
);

const WatchButton = () => (
    <Button circular icon='eye'/>
);

