import React from 'react';
import { Menu, Layout } from 'antd';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import pages from '../paths/index';

const { Header, Content, Footer, Sider } = Layout;

const Demo = ({ pages }) => {
    return <Router>
        <Sider
            // collapsible

            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
        >
            <Menu theme={'dark'} mode="inline">
                {pages.map((page, index) => <Menu.Item key={index + 1}><Link to={page.path}>{page.title}</Link></Menu.Item>)}
            </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200, height: '100%' }}>
            <Header className="site-layout-background" style={{ padding: 12 }}>Header</Header>
            <Content style={{ margin: '12px 4px 0 0', overflow: 'initial' }}>
                <Switch>
                    {pages.map((page, index) => <Route key={index} exact path={page.path} component={page.component} />)}
                </Switch>
            </Content>
        </Layout>
    </Router >
}

Demo.defaultProps = {
    pages: pages
}

export default Demo;