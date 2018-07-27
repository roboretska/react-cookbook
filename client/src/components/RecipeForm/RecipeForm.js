import React, {Component} from 'react';
import {Form, Button, Card, Divider} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import './RecipeForm.css'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from "../../actions";


class RecipeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    handleChange = (e, {name, value}) => this.setState({[name]: value});



    submitAction() {
        const data = {
            title: this.state.title,
            description: this.state.description,
            createdAt: new Date()
        };
        this.props.actions(data);
    }

    getIdFromPathName(){
        const[, id,] = window.location.pathname.split('/');
        return id;
    };

    componentWillMount(){
        if(this.getIdFromPathName()!=='recipes'){
            const [element] = this.props.storageState.filter(item => item._id===this.getIdFromPathName());
            this.setState({
                title: element.title,
                description: element.description,
                isEditing: true
            });
            console.log(element);
        }
    }

    editRecipe() {
        const data = {
            title: this.state.title,
            description: this.state.description,
            updatedAt: new Date()
        };
        console.log('function working');
        this.props.editRecipe(this.getIdFromPathName(), data);
    }

    render() {
        return (
            <div className="form-wrapper">
                <Card centered fluid raised>
                    <Card.Content>
                        <Card.Header>{this.getIdFromPathName()!=='recipes'?'Edit recipe':'Add new recipe'}</Card.Header>
                        <Divider/>
                        <Form>
                            <Form.Input label='Title' placeholder='Enter title...'
                                        name='title'
                                        value={this.state.title}
                                        onChange={this.handleChange}
                                        autoComplete="off"
                            />
                            <Form.TextArea label='Description' placeholder='Add description...'
                                           name='description'
                                           value={this.state.description}
                                           onChange={this.handleChange}
                            />
                            <div>
                                <Link to='/'>
                                    <Button floated='left' content='Return' icon='arrow left'/>
                                </Link>
                                <Link to='/'>
                                    {
                                        this.getIdFromPathName()!=='recipes'?
                                    <Button floated='right'  onClick={this.editRecipe.bind(this)} content='AAA' positive/> :
                                    <Button floated='right' onClick={this.submitAction.bind(this)} content='Submit' positive/>
                                    }
                                </Link>
                            </div>
                        </Form>
                    </Card.Content>
                </Card>
            </div>
        )
    }


}




const mapStateToProps = state => {
    return {
        storageState: state.recipes
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions.addRecipe, dispatch),
    getRecipeById: bindActionCreators(actions.getRecipeById, dispatch),
    editRecipe: bindActionCreators(actions.editRecipe, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm)