import React, {Component} from 'react'
import {connect} from 'react-redux'
import { List } from 'semantic-ui-react'

import BodyLog from './BodyLog'

class BodyLogList extends Component {

  render() {
    let logList = this.props.body_logs.body_logs.map(log => <BodyLog key={log.id} {...log} />)

    return (
      <List celled>
        {logList}
      </List>
    )
  }
}

function mapStateToProps(state){
  return {
    body_logs: state.body_log
  }
}

export default connect(mapStateToProps, null)(BodyLogList)
