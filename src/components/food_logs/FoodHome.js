import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAllFoodLogs } from '../../actions/food_log.actions'
import FoodLogList from './FoodLogList'
import NewFoodLogForm from './NewFoodLogForm'

const marginTopStyle = {
  'height': '70px'
}

export class FoodHome extends Component {
  state = {
    form : false
  }

  componentDidMount() {
    this.props.getAllFoodLogs()
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
        <h2>Food Log</h2>
       </Grid.Row>
       <Grid.Row>
         <FoodLogList />
       </Grid.Row>
       {this.state.form ?
         <Grid.Row>
           <NewFoodLogForm />
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
    food_logs: state.food_log
  }
}

function mapDispatchToProps(dispatch){
  return{
    getAllFoodLogs: bindActionCreators(getAllFoodLogs, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodHome);
