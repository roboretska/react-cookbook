import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import RecipeBlock from './RecipesBlock';

import './RecipeList.css';
import * as actions from "../../actions";

class RecipeList extends Component {

    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.getRecipesFromStore();
    }

    getRecipesFromStore(){
        this.props.getAllRecipes();
    }

    createList(){
        const {allRecipes} = this.props;
        return allRecipes.map(item =>
            <RecipeBlock item={item} key={item._id} deleteFunc={ this.props.deleteRecipe} />
        );
    }


        render() {


        return (
            <Card.Group itemsPerRow={2} className="recipe-list-wrapper">
                {this.createList()}
            </Card.Group>
        )
    }

}

const mapStateToProps = state => {
    return {
        allRecipes: state.recipes,
    }
};

const mapDispatchToProps = dispatch => ({
    getAllRecipes: bindActionCreators(actions.getAllRecipes, dispatch),
    deleteRecipe :  bindActionCreators(actions.deleteRecipe, dispatch)

});



RecipeList.propTypes={
    allRecipes: PropTypes.array
};

RecipeList.defaultProps={
    allRecipes: []
};
export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)
