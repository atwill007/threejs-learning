import React from 'react'
import './App.css'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import { routerList } from './router/index'

function App() {
  const LayoutJsx = () => (
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>{routerList}</Layout.Content>
    </Layout>
  )

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
      <Router>
        <Switch>
          <Route path="/register" exact render={register} />
          <Route path="/" component={LayoutJsx} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
