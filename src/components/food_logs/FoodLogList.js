import React, {Component} from 'react'
import {connect} from 'react-redux'
import { List } from 'semantic-ui-react'

import FoodLog from './FoodLog'

class FoodLogList extends Component {

  render() {
    let logList = this.props.food_logs.food_logs.map(log => <FoodLog key={log.id} {...log} />)

    return (
      <List celled>
        {logList}
      </List>
    )
  }
}

function mapStateToProps(state){
  return {
    food_logs: state.food_log
  }
}

export default connect(mapStateToProps, null)(FoodLogList)
