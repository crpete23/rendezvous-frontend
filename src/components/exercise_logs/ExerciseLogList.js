import React, {Component} from 'react'
import {connect} from 'react-redux'
import { List } from 'semantic-ui-react'

import DateList from './DateList'

class ExerciseLogList extends Component {

  render() {
    let logListObj = this.props.exercise_logs.exercise_logs.reduce(function(dates, log){
      if(log.date in dates){
        dates[log.date].push(log)
      } else {
        dates[log.date]=[log]
      }
      return dates;
    }, {});

    let dates = Object.keys(logListObj)

    let dateList = dates.map((date)=>
      <DateList key={date} date={date} logs={logListObj[date]} />
    )

    return (
      <List divided verticalAlign='middle'>
        {dateList}
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
