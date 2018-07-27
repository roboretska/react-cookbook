import React, {Component} from 'react';
import {Button, Card, Image, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import '../RecipeForm/RecipeForm.css'
import './CardView.css';
import * as actions from "../../actions";


class RecipeContainer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            recipe: ""
        }
    }
    getIdFromPathName(){
        const[, id,] = window.location.pathname.split('/');
        return id;
    };

    componentWillMount() {
        const [element] = this.props.recipe.filter(item => item._id===this.getIdFromPathName());


        console.log(element);

        this.setState({
            recipe: element
        });
    }

    render() {
        return (
            <div className='form-wrapper card-view'>
                <Card fluid>
                    <Card.Content header={this.state.recipe.title}
                                  meta={this.state.recipe.createdAt}/>
                    <Card.Content>
                        <Card.Description>{this.state.recipe.description}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>

                        <Link to='/'>
                            <Button floated='left' content='Return' icon='arrow left'/>
                        </Link>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => {
        return {
            recipe: state.recipes,
        }
    };

const mapDispatchToProps = dispatch => ({
        getRecipeById: bindActionCreators(actions.getRecipeById, dispatch),

    });


export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer)
