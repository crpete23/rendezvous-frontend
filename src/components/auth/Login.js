import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogin } from '../../actions/auth.actions'
import { withRouter } from 'react-router-dom';
import './styles/styles.css';

export class Login extends Component {
  state = {
    email: 'crpete23@gmail.com',
    password: 'password'
  }

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  loginAttempt = async (e) => {
    e.preventDefault()
    const userInput = {
      email : this.state.email,
      password : this.state.password
    }
    await this.props.userLogin(userInput)
    if(!this.props.auth.showLoginError){
      this.props.history.push('./home')
    } else {
      this.setState({
        email: '',
        password: ''
      })
    }
  }

  render(){
    return (
      <Grid centered id='loginBodyGrid' className='fontSize140'>
        <Grid.Column stretched computer={3} mobile={14}>
          <Form onSubmit={this.loginAttempt}>
            <Segment>
              <Label as='a' size='massive' color='teal' ribbon='right'>
                Rendevous
              </Label>
            <Form.Field>
              <label>Email</label>
              <input name='email' type="email" placeholder="Email" onChange={this.onChange} value={this.state.email} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input name="password" type="password" placeholder="Password" autoComplete="section-blue current-password" onChange={this.onChange} value={this.state.password} />
            </Form.Field>
            <Grid>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column stretched width={10}>
               <Button type="submit">Login</Button>
             </Grid.Column>
             <Grid.Column width={3}></Grid.Column>
            </Grid>
          </Segment>
          {this.props.auth.showLoginError ? <Segment color='red' align='center'>
          Incorrect Username or Password
          </Segment> : null }
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch){
  return{
    userLogin: bindActionCreators(userLogin, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
