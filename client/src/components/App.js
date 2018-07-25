import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

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
                        <Route exact  path='/' render={() =><Redirect to='/recipes'/>}/>
                        <Route exact  path='/recipes' component={RecipeList}/>
                        <Route  path='/recipes/add' component={RecipeForm}/>
                        <Route  path='/:id/edit' component={RecipeForm}/>
                        <Route  path='/:id' component={RecipeForm}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
