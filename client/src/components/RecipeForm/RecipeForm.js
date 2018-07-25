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
            <div>
            <ReturnButton/>
            <SubmitButton/>
            </div>
        </Form>
            </Card.Content>
        </Card>
        </div>

    )
}

const ReturnButton = () => (
        <Link to='/'>
            <Button floated='left' content='Return' icon='arrow left'/>
        </Link>
);

const SubmitButton = () => (
        <Link to='/'>
            <Button  floated='right' content='Submit' positive/>
        </Link>
);