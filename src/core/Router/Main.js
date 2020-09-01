import React from 'react';
import { Menu, Layout } from 'antd';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import NumberIcon from '../../components/NumberIcon';

import pages from '../paths/index';

const { Header, Content, Footer, Sider } = Layout;

const Demo = ({ pages, IconComponent }) => {
    const getSelectedKeys = () => [ window.location?.hash.replace('#', '') || '/'];
    return <Router>
        <Layout>
            <Sider
                collapsible
                style={{
                    overflow: 'auto',
                    height: '100vh'
                }}
            >
                <Menu theme={'dark'} mode="inline" defaultSelectedKeys={getSelectedKeys()}>
                    {pages.map((page, index) => <Menu.Item key={page.path} icon={index > 0 ? <IconComponent number={index} /> : <HomeOutlined />}><Link to={page.path}>{page.title}</Link></Menu.Item>)}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ color: '#ffffff', fontSize: '1.5em' }}>Header</Header>
                <Content>
                    <Switch>
                        {pages.map((page, index) => <Route key={index} exact path={page.path} component={page.component} />)}
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    </Router >
}

Demo.defaultProps = {
    pages: pages,
    IconComponent: NumberIcon
}

export default Demo;