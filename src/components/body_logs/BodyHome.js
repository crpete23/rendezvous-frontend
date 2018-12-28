import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAllBodyLogs } from '../../actions/body_log.actions'
import BodyLogList from './BodyLogList'

const marginTopStyle = {
  'height': '70px'
}

export class BodyHome extends Component {
  state = {

  }

  componentDidMount() {
  this.props.getAllBodyLogs()
}

  render(){
    return (
      <Grid centered id='loginBodyGrid'>
       <Grid.Row>
        <h2>Body Log</h2>
       </Grid.Row>
       <Grid.Row>
         <BodyLogList />
       </Grid.Row>
       <Grid.Row style={marginTopStyle}>
        <Button circular />
       </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth,
    body_logs: state.body_log
  }
}

function mapDispatchToProps(dispatch){
  return{
    getAllBodyLogs: bindActionCreators(getAllBodyLogs, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyHome);
