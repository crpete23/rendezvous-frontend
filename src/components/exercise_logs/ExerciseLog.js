import React from 'react'
import {List, Grid, Label} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { deleteExerciseLog } from '../../actions/exercise_log.actions'

const ExerciseLog = ({id, name, type, user_id, date, time, weight, reps, duration, rest, deleteLog}) => {
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
     <List.Content>
      <List.Header>{dateString + ' at ' + timeToString(time)}</List.Header>
      <Grid>
        <Grid.Column computer={14} mobile={12}>
          {`Exercise: ${name}, weight: ${weight}, reps: ${reps}, duration: ${duration}, rest: ${rest}`}
          <a onClick={()=>{deleteLog(id)}}>Delete</a>
        </Grid.Column>
      </Grid>
     </List.Content>
   </List.Item>
  )
}

function mapDispatchToProps(dispatch){
  return{
    deleteLog: bindActionCreators(deleteExerciseLog, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ExerciseLog)
