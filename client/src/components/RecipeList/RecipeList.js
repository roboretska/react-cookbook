import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

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
        console.log(allRecipes);
        return allRecipes.map(item =>
            <RecipeBlock item={item} key={item._id} />
        );
    }


        render() {

            const {allRecipes, test} = this.props;
            console.log(allRecipes);


        return (
            <Card.Group itemsPerRow={2} className="recipe-list-wrapper">
                {/*<RecipeBlock/>*/}
                {/*<RecipeBlock recipe={allRecipes}/>*/}
                {/*<RecipeBlock/>*/}
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
    getAllRecipes: bindActionCreators(actions.getAllRecipes, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)
