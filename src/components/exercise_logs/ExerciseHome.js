import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const marginTopStyle = {
  'height': '70px'
}

export class ExerciseHome extends Component {
  state = {
    form : false
  }

  componentDidMount() {

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
         <h2>Exercise Logs List</h2>
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
  }
}

function mapDispatchToProps(dispatch){
  return{
  }
}

export default connect(null, null)(ExerciseHome);
