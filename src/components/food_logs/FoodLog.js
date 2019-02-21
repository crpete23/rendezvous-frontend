import React from 'react'
import {List, Grid, Label} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { deleteFoodLog } from '../../actions/food_log.actions'

const FoodLog = ({id, time, food, deleteLog}) => {

  const ingredientsList = food.ingredients.length ? food.ingredients.map((ingredient)=>{
    return ingredient.name
  }).join(', ') : null;

  const mealsList = food.meals.length ? food.meals.map((meal)=>{
    return `${meal.name} (${meal.ingredients.list.length ? meal.ingredients.list.map((ingredient)=>{ return `${ingredient.quantity} ${ingredient.name}`}).join(', ') : null })`
  }).join(', ') : null;

  function upperCase (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function timeToString(time){
    var min = time%100;
    var hour = (time%10000-min)/100;
    var end = hour>11? 'PM' : 'AM';

    if(min<10){
      min='0'+min;
    }

    if(hour>12){
      hour=hour-12;
    } else if (hour===0){
      hour=12;
    }
    return `${hour}:${min} ${end}`
  }

  return (
    <List.Item>
    <List.Content floated='right'>
      <a onClick={()=>{deleteLog(id)}}>Delete</a>
    </List.Content>
     <List.Content>
      <List.Header>{timeToString(time)}</List.Header>
      <List.Description>
          {`Meals: ${mealsList}`}
      </List.Description>
      <List.Description>
          {`Add Ons: ${ingredientsList}`}
      </List.Description>
     </List.Content>
   </List.Item>
  )
}

function mapDispatchToProps(dispatch){
  return{
    deleteLog: bindActionCreators(deleteFoodLog, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(FoodLog)
