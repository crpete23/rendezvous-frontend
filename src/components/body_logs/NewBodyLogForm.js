import React, { Component } from 'react';
import { Button, Form, Segment, List, Message, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { postNewBodyLog } from '../../actions/body_log.actions'

export class NewBodyLogForm extends Component {
  state = {
    weight:'',
    fat_perc:'',
    lean:'',
    fat:''
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

      console.log(newLog)

      this.props.postNewBodyLog(newLog)

      console.log('worked!')

      this.setState({
        ...this.state
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

  render(){
    return (
    <Form onSubmit={this.submit}>
        <Form.Group widths='equal'>
          <Form.Field name='weight' onChange={this.handleChange} control={Input} label='Weight' placeholder='Weight' />
          <Form.Field name='fat_perc' onChange={this.handleChange} control={Input} label='Fat Percent' placeholder='Fat Percent' />
          <Form.Field name='lean' onChange={this.handleChange} control={Input} label='Lean Weight' placeholder='Lean Weight' />
          <Form.Field name='fat' onChange={this.handleChange} control={Input} label='Fat Weight' placeholder=
          'Fat Weight' />
        </Form.Group>
        <Form.Field control={Button}>Submit</Form.Field>
    </Form>
  )}

}

function mapDispatchToProps(dispatch){
  return{
    postNewBodyLog: bindActionCreators(postNewBodyLog, dispatch)
  }
}


export default connect(null, mapDispatchToProps)(NewBodyLogForm);
