import React from 'react'
import { routerList } from '@router/index'
import { Layout } from 'antd'
import MenuSider from '@containers/MenuSider'

const View = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider>
        <MenuSider />
      </Layout.Sider>
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>{routerList}</Layout.Content>
      </Layout>
    </Layout>
  )
}
export default View
