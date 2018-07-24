import React  from 'react';
import {Form, Button, Card, Divider} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import './RecipeForm.css'


export default function RecipeForm(item){

    return(
        <div className="form-wrapper">
        <Card  itemsPerRow={2} centered fluid  raised >
            <Card.Content>
            <Card.Header>Add new recipe</Card.Header>
                <Divider/>
        <Form>
            <Form.Input  label='Title' placeholder='Enter title...' />
            <Form.TextArea label='Description' placeholder='Add description...' />
            <ReturnButton/>
        </Form>
            </Card.Content>
        </Card>
        </div>

    )
}

const ReturnButton = () => (
    <Button.Group>
        <Link to='/'>
            <Button content='Return' icon='arrow left'/>
        </Link>
        <Button content='Submit' icon='arrow left'/>
    </Button.Group>
);

