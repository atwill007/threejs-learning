import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Spin, Divider } from 'antd'
import { PAGE_DICT } from '@router/Constants'

const routes = [
  {
    path: PAGE_DICT.HOME,
    component: React.lazy(() => import('../pages/Home')),
  },
  {
    path: PAGE_DICT.NOT_FOUND,
    component: React.lazy(() => import('../pages/NotFound')),
  },
  {
    path: PAGE_DICT.THREE_JS,
    component: React.lazy(() => import('../pages/ThreeJS')),
  },
]

export const routerList = (
  <div className="router-list">
    <Divider>Text</Divider>
    <Suspense fallback={<Spin tip="Loading..." />}>
      <Switch>
        {routes.map(item => (
          <Route key={item.path} path={item.path} component={item.component} />
        ))}
      </Switch>
    </Suspense>
  </div>
)
