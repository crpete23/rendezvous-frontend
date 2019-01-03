import React from 'react'
import {List, Grid, Label} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { deleteBodyLog } from '../../actions/body_log.actions'

const BodyLog = ({id, user_id, date, weight, fat_perc, lean, fat, deleteLog}) => {
  const dateString = `${date.toString().slice(0,2)}/${date.toString().slice(2,4)}/${date.toString().slice(4)}`

  function upperCase (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  return (
    <List.Item>
     <List.Content>
      <List.Header>{dateString}</List.Header>
      <Grid>
        <Grid.Column computer={14} mobile={12}>
          {`Weight: ${weight}, Fat Percent: ${fat_perc}%, lean: ${lean}, fat: ${fat}`}
          <a onClick={()=>{deleteLog(date)}}>Delete</a>
        </Grid.Column>
      </Grid>
     </List.Content>
   </List.Item>
  )
}

function mapDispatchToProps(dispatch){
  return{
    deleteLog: bindActionCreators(deleteBodyLog, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(BodyLog)
