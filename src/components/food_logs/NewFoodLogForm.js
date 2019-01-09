import React, { Component } from 'react';
import { Button, Form, Segment, List, Message, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { postNewFoodLog } from '../../actions/food_log.actions'

export class NewFoodLogForm extends Component {
  state = {
    meal:'',
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

      this.props.postNewFoodLog(newLog)

      this.setState({
        meal:''
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
    return (
    <Form onSubmit={this.submit}>
        <Form.Group widths='equal'>
          <Form.Field name='meal' value={this.state.meal} onChange={this.handleChange} control='select' label='Meal' >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </Form.Field>
        </Form.Group>
        <Form.Field control={Button}>Submit</Form.Field>
    </Form>
  )}

}

function mapDispatchToProps(dispatch){
  return{
    postNewFoodLog: bindActionCreators(postNewFoodLog, dispatch)
  }
}


export default connect(null, mapDispatchToProps)(NewFoodLogForm);
