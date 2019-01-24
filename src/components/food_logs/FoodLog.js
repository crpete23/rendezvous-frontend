import React from 'react'
import {List, Grid, Label} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { deleteFoodLog } from '../../actions/food_log.actions'

const FoodLog = ({id, name, calories, protein, carbs, fat, PUFAs, user_id, date, time, deleteLog}) => {
  const dateString = `${date.toString().slice(0,2)}/${date.toString().slice(2,4)}/${date.toString().slice(4)}`

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
          {`Meal: ${name}, calories: ${calories}, protein: ${protein}, carbs: ${carbs}, fat: ${fat}, PUFAs: ${PUFAs}`}
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
