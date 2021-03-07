import React from 'react'
import { Menu, Icon, Layout } from 'antd'
import { PAGE_DICT } from '@router/Constants'
import routerUtils from '@helpers/routerUtils'

const { SubMenu } = Menu

class MenuSider extends React.Component {
  state = {
    collapsed: false,
  }

  onCollapse = collapsed => {
    this.setState({ collapsed })
  }

  onMenuClick = params => {
    const { item, key, keyPath, domEvent } = params
    routerUtils.pushPath(key)
  }

  render() {
    return (
      <Layout.Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[PAGE_DICT.THREE_JS]}
          mode="inline"
          onClick={this.onMenuClick}
        >
          <SubMenu
            key="threeJS"
            title={
              <span>
                <Icon type="appstore" />
                <span>ThreeJS</span>
              </span>
            }
          >
            <Menu.Item key={PAGE_DICT.THREE_JS}>ThreeJS</Menu.Item>
          </SubMenu>
        </Menu>
      </Layout.Sider>
    )
  }
}

export default MenuSider
