import React, {Component} from 'react';
import {Button, Card, Rating} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import './RecipeBlock.css'
import PropTypes from 'prop-types';




export default class RecipeContainer extends Component{


    constructor(props){
        super(props);
        this.state = {
            rating: this.props.item.rate || 0
        }
    }

    handleRate = (e, { rating, maxRating }) => {
        this.setState({ rating, maxRating });
        this.props.saveRating(this.props.item._id, rating);
    };

    render() {

        const  recipe = this.props.item;
        console.log(recipe);
        return (

            <Card fluid>
                <Card.Content>
                    <ListButton recipe={recipe} deleteFunc={this.props.deleteFunc}/>
                    <Card.Header>{recipe.title}</Card.Header>
                    <Card.Description>{recipe.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Rating icon='star' defaultRating={recipe.rating} maxRating={5}
                                onRate={this.handleRate}  disabled={this.state.rating}/>
                    </div>
                    {recipe.createdAt}
                </Card.Content>
            </Card>
        )
    }
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
};

ListButton.defaultProps={
    recipe: {}
};