import React, {Component} from 'react'
import {connect} from 'react-redux'
import { List } from 'semantic-ui-react'

import FoodLog from './FoodLog'
import DateList from './DateList'

class FoodLogList extends Component {

  render() {
    let logListObj = this.props.food_logs.food_logs.reduce(function(dates, log){
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
    food_logs: state.food_log
  }
}

export default connect(mapStateToProps, null)(FoodLogList)
