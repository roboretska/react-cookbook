import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import {connect} from 'react-redux';

import RecipeBlock from './RecipesBlock';

import './RecipeList.css';
import * as actions from "../../actions";
import store from "../../store";


class RecipeList extends Component {



    render(){
        return(
            <Card.Group itemsPerRow={2} className="recipe-list-wrapper">
                {/*<RecipeBlock/>*/}
                <RecipeBlock/>
                {/*<RecipeBlock/>*/}
            </Card.Group>
        )
    }

}

const mapStateToProps = state => {
    console.log("Here is connect component");
    return state;
};

const mapDispatchToProps = dispatch   => {
    dispatch(actions.getAllRecipes());
    console.log(store.getState());
};


export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)
