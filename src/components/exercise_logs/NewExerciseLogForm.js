import React, { Component } from 'react';
import { Button, Form, Segment, List, Message, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { postNewExerciseLog } from '../../actions/exercise_log.actions'
import { getAllActivities } from '../../actions/activity.actions'

export class NewExerciseLogForm extends Component {
  state = {
    exercise:'',
    weight:'',
    reps:'',
    duration:'',
    rest:''
  }

  componentDidMount() {
    this.props.getAllActivities()
  }

    handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      this.setState({ ...this.state,
      [name]: value })
    }

    submit = async (e) => {
      e.preventDefault();
      let newLog = {...this.state}
      newLog.date = this.today()
      newLog.time = this.time()

      console.log(newLog)

      this.props.postNewExerciseLog(newLog)

      this.setState({
        exercise:'',
        weight:'',
        reps:'',
        duration:'',
        rest:''
      })
    }

    today = () => {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd
      }

      if (mm < 10) {
        mm = '0' + mm
      }

      today = mm + dd + yyyy;

      return today
    }

    time = () => {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      now = '' + hours + minutes;
      return now;
    }

  render(){
    const activityOptions = this.props.activities.activities.map(activity=> <option key={activity.id} value={activity.id}>{activity.name}</option>)

    return (
    <Form onSubmit={this.submit}>
        <Form.Group widths='equal'>
          <Form.Field name='exercise' value={this.state.exercise} onChange={this.handleChange} control='select' label='Exercise' >
            {activityOptions}
          </Form.Field>
          <Form.Field name='weight' value={this.state.weight} onChange={this.handleChange} control={Input} label='Weight' placeholder='Weight' />
          <Form.Field name='reps' value={this.state.reps} onChange={this.handleChange} control={Input} label='Reps' placeholder='Reps' />
          <Form.Field name='duration' value={this.state.duration} onChange={this.handleChange} control={Input} label='Duration' placeholder=
          'Duration' />
          <Form.Field name='rest' value={this.state.rest} onChange={this.handleChange} control={Input} label='Rest' placeholder=
          'Rest' />
        </Form.Group>
        <Form.Field control={Button}>Submit</Form.Field>
    </Form>
  )}

}

function mapStateToProps(state){
  return {
    activities: state.activities
  }
}

function mapDispatchToProps(dispatch){
  return{
    postNewExerciseLog: bindActionCreators(postNewExerciseLog, dispatch),
    getAllActivities: bindActionCreators(getAllActivities, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewExerciseLogForm);
