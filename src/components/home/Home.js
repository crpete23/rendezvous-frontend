import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

const marginTopStyle = {
  'height': '70px'
}

export class Home extends Component {
  state = {

  }

  render(){
    return (
      <Grid centered id='loginBodyGrid'>
       <Grid.Row>
        <h2>Logged in</h2>
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
    auth: state.auth
  }
}

export default connect(mapStateToProps, null)(Home);
