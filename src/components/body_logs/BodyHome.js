import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAllBodyLogs } from '../../actions/body_log.actions'
import BodyLogList from './BodyLogList'
import NewBodyLogForm from './NewBodyLogForm'

const marginTopStyle = {
  'height': '70px'
}

export class BodyHome extends Component {
  state = {
    form : false
  }

  componentDidMount() {
  this.props.getAllBodyLogs()
}

revealForm = () => {
  const newVal = !this.state.form;
  this.setState({
    ...this.state,
    form: newVal
  })
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
       {this.state.form ?
         <Grid.Row>
           <NewBodyLogForm />
         </Grid.Row> :
         null
       }
       <Grid.Row>
         <Button onClick={this.revealForm}>New Entry</Button>
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
