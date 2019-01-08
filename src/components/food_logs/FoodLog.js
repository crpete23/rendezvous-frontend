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

  return (
    <List.Item>
     <List.Content>
      <List.Header>{dateString + ' at ' + time}</List.Header>
      <Grid>
        <Grid.Column computer={14} mobile={12}>
          {`Meal: ${name}, calories: ${calories}, protein: ${protein}, carbs: ${carbs}, fat: ${fat}, PUFAs: ${PUFAs}`}
          <a onClick={()=>{deleteLog(id)}}>Delete</a>
        </Grid.Column>
      </Grid>
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
