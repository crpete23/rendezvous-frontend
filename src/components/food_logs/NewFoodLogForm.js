import React, { Component } from 'react';
import { Button, Form, Segment, List, Message, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { postNewFoodLog } from '../../actions/food_log.actions'
import { getAllMeals } from '../../actions/meal.actions'

export class NewFoodLogForm extends Component {
  state = {
    meal:'',
  }

  componentDidMount() {
    this.props.getAllMeals()
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
      if (minutes<10) {
        minutes = '0'+minutes;
      }
      now = '' + hours + minutes;
      return now;
    }

  render(){
    const mealOptions = this.props.meals.meals.map(meal=> <option key={meal.id} value={meal.id}>{meal.name}</option>)

    return (
    <Form onSubmit={this.submit}>
        <Form.Group widths='equal'>
          <Form.Field name='meal' value={this.state.meal} onChange={this.handleChange} control='select' label='Meal' >
            <option value="" disabled>Select Meal</option>
            {mealOptions}
          </Form.Field>
        </Form.Group>
        <Form.Field control={Button}>Submit</Form.Field>
    </Form>
  )}

}

function mapStateToProps(state){
  return {
    meals: state.meals
  }
}

function mapDispatchToProps(dispatch){
  return{
    postNewFoodLog: bindActionCreators(postNewFoodLog, dispatch),
    getAllMeals: bindActionCreators(getAllMeals, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewFoodLogForm);
