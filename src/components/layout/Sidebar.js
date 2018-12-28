import React, { Component } from 'react';
import { Sidebar, Button, Form, Grid, Segment, Label, Menu, Icon } from 'semantic-ui-react'
import { Route, Redirect, withRouter } from 'react-router-dom'

export class SidebarHome extends Component {
  state = {
    visible:false
  }

  handleHideClick = () => this.setState({ ...this.state, visible: false })
  handleShowClick = () => this.setState({ ...this.state, visible: true })
  handleSidebarHide = () => this.setState({ ...this.state, visible: false })


  render(){
    const { visible } = this.state

    return (
      <div>
          <Button disabled={visible} onClick={this.handleShowClick}>
            <Icon name='bars' />
          </Button>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a' onClick={()=>
              this.props.history.push({
                pathname: '/home'
              })
            }>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a' onClick={()=>
              this.props.history.push({
                pathname: '/'
              })
            }>
              Login
            </Menu.Item>
            <Menu.Item as='a' onClick={()=>
              this.props.history.push({
                pathname: '/signup'
              })
            }>
              Sign Up
            </Menu.Item>
            <Menu.Item as='a' onClick={()=>
              this.props.history.push({
                pathname: '/exercise',
                search: `?`
              })
            }>
              Exercise Log
            </Menu.Item>
            <Menu.Item as='a' onClick={()=>
              this.props.history.push({
                pathname: '/food',
                search: `?`
              })
            }>
              Food Log
            </Menu.Item>
            <Menu.Item as='a' onClick={()=>
              this.props.history.push({
                pathname: '/body',
                search: `?`
              })
            }>
              Body Log
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Route {...this.props} render={()=>{
              return this.props.render()
            }} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}


export default withRouter(SidebarHome);
