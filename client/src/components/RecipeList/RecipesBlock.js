import React from 'react';
import {Button, Card, Image, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import api from '../../api/index';


import 'semantic-ui-css/semantic.min.css';

import './RecipeBlock.css'

export default function RecipeContainer(item) {



    return (

        <Card fluid>
            <Card.Content>
                <Card.Header>Daniel</Card.Header>
                <Card.Meta>
                    <Link to ='/recipe' onClick={api.getAll}><WatchButton/></Link>
                    <Link to='/edit'><EditButton/></Link>
                    <Link to='/delete'><DeleteButton/></Link>
                </Card.Meta>
                <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user'/>
                    10 Friends
                </a>
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

