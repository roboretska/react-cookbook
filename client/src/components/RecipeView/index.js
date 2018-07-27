import React, {Component} from 'react';
import {Button, Card, Image, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import '../RecipeList/RecipeBlock.css'




export default function RecipeContainer(props) {


    const recipe=props.item;
    const deleteFunc=props.deleteFunc;

    return (

        <Card fluid>
            <Card.Content>
                {/*<ListButton />*/}
                <Card.Header>Hi</Card.Header>
                <Card.Description>Test</Card.Description>
            </Card.Content>
            <Card.Content extra>
                Test
            </Card.Content>
        </Card>
    )
}

// const DeleteButton = (props) => (
//     <Button circular icon='trash' negative onClick={()=>{props.onClickFunction(props.id, props.deleteFunc)}}/>
// );
//
// const EditButton = () => (
//     <Button circular icon='pencil alternate'/>
// );
//
// const WatchButton = () => (
//     <Button circular icon='eye'/>
// );
//
// const ListButton = (props) => (
//     <Card.Meta className='button-wrapper'>
//         {window.location.pathname === '/recipes' && <Link to={`/${props.recipe._id}`}><WatchButton/></Link>}
//         <Link to={`/${props.recipe._id}/edit`}><EditButton/></Link>
//         <DeleteButton onClickFunction={deleteRecipeClick} id={props.recipe._id} deleteFunc={props.deleteFunc}/>
//     </Card.Meta>
// );
//
// function deleteRecipeClick(id, func) {
//     console.log(id);
//     console.log(func);
//     func(id);
//
// }