import React, {Component} from 'react'
import {connect} from 'react-redux'
import { List } from 'semantic-ui-react'

import ExerciseLog from './ExerciseLog'

class ExerciseLogList extends Component {

  render() {
    let logList = this.props.exercise_logs.exercise_logs.map(log => <ExerciseLog key={log.id} {...log} />)

    return (
      <List celled>
        {logList}
      </List>
    )
  }
}

function mapStateToProps(state){
  return {
    exercise_logs: state.exercise_log
  }
}

export default connect(mapStateToProps, null)(ExerciseLogList)
