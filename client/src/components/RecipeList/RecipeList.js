import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import RecipeBlock from './RecipesBlock';

import './RecipeList.css';
import * as actions from "../../actions";
import {Button, Search, Checkbox} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

class RecipeList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchKeyword: ''
        }
    }


    componentDidMount() {
        this.getRecipesFromStore();
    }

    getRecipesFromStore() {
        this.props.getAllRecipes();
    }

    createList() {
        const {allRecipes} = this.props;
        return allRecipes.map(item =>
            <RecipeBlock item={item} key={item._id} deleteFunc={this.props.deleteRecipe}
                         saveRating={this.props.saveRating}/>
        );
    }

    handleSearchValueChange = (event) => {
        this.setState({searchKeyword: event.target.value});
        this.searchRecipes(event.target.value)
    };

    searchRecipes(keyword) {
        if (keyword !== '') {
            console.log("im not empty");
            this.props.filterRecipes(keyword);
        } else {
            this.props.getAllRecipes();
        }
    }

    sortRecipes(event){
        if(event.target.selected){
            console.log('im checked')
        }
    }

    render() {


        return (
            <div>
                <Link to='/recipes/add'><Button fluid content='Add new recipe' icon='add'
                                                color='yellow'/>
                </Link>

                <div className='nav-container'>
                    <span className=''>
                    <Search showNoResults={false} value={this.state.searchKeyword}
                            onSearchChange={this.handleSearchValueChange}/>
                    </span>
                    <span className='checkbox-container'>
                        <Checkbox slider label={{ children: 'Sort by rate' }}
                            onChange={this.sortRecipes}
    />
                    </span>
                </div>
                <Card.Group itemsPerRow={2} className="recipe-list-wrapper">
                    {this.createList()}
                </Card.Group>
            </div>
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
    deleteRecipe: bindActionCreators(actions.deleteRecipe, dispatch),
    filterRecipes: bindActionCreators(actions.filterRecipes, dispatch),
    saveRating: bindActionCreators(actions.saveRating, dispatch)

});


RecipeList.propTypes = {
    allRecipes: PropTypes.array
};

RecipeList.defaultProps = {
    allRecipes: []
};
export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)
