import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Login, Signup, Home, SidebarHome } from './components'

export class App extends Component {
  render(){
    return (
      <div>
        <Switch>
        <SidebarHome exact path="/" render={()=>{
          return <Login />
        }} />
        <SidebarHome exact path="/signup"
        render={()=>{
          return <Signup />
        }} />
          <Route exact path="/home" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
