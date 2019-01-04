import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAllExerciseLogs } from '../../actions/exercise_log.actions'
import ExerciseLogList from './ExerciseLogList'

const marginTopStyle = {
  'height': '70px'
}

export class ExerciseHome extends Component {
  state = {
    form : false
  }

  componentDidMount() {
    this.props.getAllExerciseLogs()
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
        <h2>Exercise Log</h2>
       </Grid.Row>
       <Grid.Row>
         <ExerciseLogList />
       </Grid.Row>
       {this.state.form ?
         <Grid.Row>
           <h2>Form</h2>
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
    exercise_logs: state.exercise_log
  }
}

function mapDispatchToProps(dispatch){
  return{
    getAllExerciseLogs: bindActionCreators(getAllExerciseLogs, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseHome);
