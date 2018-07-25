import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import {connect} from 'react-redux';

import RecipeBlock from './RecipesBlock';

import './RecipeList.css';
import * as actions from "../../actions";


class RecipeList extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {isFetching, allRecipes} = this.props;
        var recipesList = allRecipes.map(item => {
            
        });

            console.log(allRecipes);
        return (
            <Card.Group itemsPerRow={2} className="recipe-list-wrapper">
                {/*<RecipeBlock/>*/}
                <RecipeBlock recipe={allRecipes}/>
                {/*<RecipeBlock/>*/}
            </Card.Group>
        )
    }

}

const mapStateToProps = state => {
    return {
        allRecipes: state.allRecipes
    }
};

const mapDispatchToProps = dispatch => {
    dispatch(actions.getAllRecipes());
};


export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)
