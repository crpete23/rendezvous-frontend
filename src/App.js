import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Login, Signup, Home, SidebarHome, AuthenticatedRoute, BodyHome, ExerciseHome, FoodHome } from './components'

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
          <SidebarHome exact path="/home" render={()=>{
            return <AuthenticatedRoute render={
            ()=>{ return <Home />}} />
          }} />
          <SidebarHome exact path="/body" render={()=>{
            return <AuthenticatedRoute render={
            ()=>{ return <BodyHome />}} />
          }} />
          <SidebarHome exact path="/exercise" render={()=>{
            return <AuthenticatedRoute render={
            ()=>{ return <ExerciseHome />}} />
          }} />
          <SidebarHome exact path="/food" render={()=>{
            return <AuthenticatedRoute render={
            ()=>{ return <FoodHome />}} />
          }} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
