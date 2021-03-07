import React from 'react'
import './App.css'

import { Switch, Route, withRouter } from 'react-router-dom'
import Layout from '@containers/Layout'

// @withRouter
class App extends React.Component {
  componentDidMount() {
    if (!window._router) {
      window._router = {
        history: this.props.history,
        location: this.props.location,
      }
    }
  }
  render() {
    const register = ({ location }) => {
      return (
        <div>
          <h2>register</h2>
          <p>location: {JSON.stringify(location)}</p>
        </div>
      )
    }
    return (
      <div className="App">
        <Switch>
          <Route path="/register" exact render={register} />
          <Route path="/" component={Layout} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
