import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

export class Home extends Component {
  state = {

  }

  render(){
    return (
      <Grid>
       <h2>Logged in</h2>
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
