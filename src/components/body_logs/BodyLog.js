import React from 'react'
import {List, Grid, Label} from 'semantic-ui-react'
import { connect } from 'react-redux'

const BodyLog = ({id, user_id, date, weight, fat_perc, lean, fat }) => {
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
        </Grid.Column>
      </Grid>
     </List.Content>
   </List.Item>
  )
}

export default connect(null, null)(BodyLog)
