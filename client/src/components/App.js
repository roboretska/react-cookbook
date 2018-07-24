import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import Head from './Head';

import RecipeList from './RecipeList/RecipeList';
import RecipeForm from './RecipeForm/RecipeForm';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Head/>
                <BrowserRouter>
                    <Switch>
                        <Route exact  path='/' component={RecipeList}/>
                        <Route  path='/add' component={RecipeForm}/>
                        <Route  path='/edit' component={RecipeForm}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
