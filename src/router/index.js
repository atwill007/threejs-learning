import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Spin, Divider } from 'antd'

export const PAGE_DICT = {
  HOME: '/home',
  NOT_FOUND: '/404',
}

export const routerList = (
  <div className="router-list">
    <Divider>Text</Divider>
    <Suspense fallback={<Spin tip="Loading..." />}>
      <Switch>
        <Route
          key={PAGE_DICT.HOME}
          path={PAGE_DICT.HOME}
          component={React.lazy(() => import('../pages/Home'))}
        />
        <Route
          key={PAGE_DICT.NOT_FOUND}
          path={PAGE_DICT.NOT_FOUND}
          component={React.lazy(() => import('../pages/NotFound'))}
        />
      </Switch>
    </Suspense>
  </div>
)
