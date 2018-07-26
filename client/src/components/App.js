import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

import Head from './Head';

import { Provider } from 'react-redux';
import createStore from '../store';
import history from '../store/history';

import RecipeList from './RecipeList/RecipeList';
import RecipeForm from './RecipeForm/RecipeForm';
import RecipeBlock from './RecipeList/RecipesBlock';


const store = createStore();


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Head/>
                <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact  path='/' render={() =><Redirect to='/recipes'/>}/>
                        <Route exact  path='/recipes' component={RecipeList}/>
                        <Route  path='/recipes/add' component={RecipeForm}/>
                        <Route  path='/:id/edit' component={RecipeForm}/>
                        <Route  path='/:id' recipe={{title: "aaa", description: "Aaa", createdAt:"now" }} component={RecipeBlock}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
            </React.Fragment>
        );
    }
}

export default App;
