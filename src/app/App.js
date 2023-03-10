import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/layouts/login'
import Main from './components/layouts/main'
import NavBar from './components/navBar'
import Users from './components/layouts/users'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/users/:userId?' component={Users} />
        <Route path='/login' component={Login} />
        <Route path='/' exact component={Main} />
        <Redirect to='/' />
      </Switch>
    </>
  )
}

export default App
