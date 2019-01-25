import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Grid, List, Icon } from 'semantic-ui-react'

import ExerciseLog from './ExerciseLog'

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
    let logList = this.props.logs.map(log => <ExerciseLog key={log.id} {...log} />)

    let date = this.dateToString(this.props.date)

    return (
      <List.Item>
      <b>{date}</b>
      <List.Content floated='right'>
        <Icon onClick={()=>this.revealList()} name="bars" />
      </List.Content>
        {this.state.open ? <List.List className="textAlignLeft">
          {logList}
        </List.List> : null }
      </List.Item>
    )
  }
}

export default connect(null, null)(DateList)
