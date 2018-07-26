import React, {Component} from 'react';
import {Form, Button, Card, Divider} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import './RecipeForm.css'


export default class RecipeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description:''
        }
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    render() {
        console.log(this.state);
        return (
            <div className="form-wrapper">
                <Card centered fluid raised>
                    <Card.Content>
                        <Card.Header>Add new recipe</Card.Header>
                        <Divider/>
                        <Form>
                            <Form.Input label='Title' placeholder='Enter title...'
                                        name='title'
                                        value={this.state.title}
                                        onChange={this.handleChange}
                            />
                            <Form.TextArea label='Description' placeholder='Add description...'
                                           name='description'
                                           value={this.state.description}
                                           onChange={this.handleChange}
                            />
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


}

const ReturnButton = () => (
    <Link to='/'>
        <Button floated='left' content='Return' icon='arrow left'/>
    </Link>
);

const SubmitButton = () => (
    <Link to='/'>
        <Button floated='right' content='Submit' positive/>
    </Link>
);