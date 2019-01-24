import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Grid, List, Icon } from 'semantic-ui-react'

import FoodLog from './FoodLog'

class DateList extends Component {
  state={
    open: false
  }

  revealList = () => {
    let newVal = !this.state.open
    this.setState({
      open: newVal
    })
  }

  dateToString = (date) => {
    return `${date.toString().slice(0,2)}/${date.toString().slice(2,4)}/${date.toString().slice(4)}`
  }

  render() {
    let totals = this.props.logs.reduce(function(totals, log){
      totals.calories+=log.calories;
      totals.protein+=log.protein;
      totals.carbs+=log.carbs;
      totals.fat+=log.fat;
      totals.PUFAs+=log.PUFAs;
      return totals
    },{
      calories:0,
      protein:0,
      carbs:0,
      fat:0,
      PUFAs:0
    })

    let logList = this.props.logs.map(log => <FoodLog key={log.id} {...log} />)

    let date = this.dateToString(this.props.date)

    return (
      <List.Item>
      <b>{date}</b>
      <List.Content floated='right'>
        <Icon onClick={()=>this.revealList()} name="bars" />
      </List.Content>
      <List.Content>
        {`Daily Totals: calories ${totals.calories}, protein ${totals.protein}, carbs ${totals.carbs}, fat ${totals.fat}, PUFAs ${totals.PUFAs}`}
      </List.Content>
        {this.state.open ? <List.List className="textAlignLeft">
          {logList}
        </List.List> : null }
      </List.Item>
    )
  }
}

export default connect(null, null)(DateList)
