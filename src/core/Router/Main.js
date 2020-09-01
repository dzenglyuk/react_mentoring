import React, { useMemo } from 'react';
import { Menu, Layout } from 'antd';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import NumberIcon from '../../components/NumberIcon';

import pages from '../paths/index';

const { Header, Content, Footer, Sider } = Layout;

const LayoutWrap = withRouter(({ pages, IconComponent, location }) => {
    const getSelectedKeys = () => [location?.pathname || '/'];
    return <Layout>
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
})

const Demo = ({ demoTestProp, LayoutWrapComponent, pages, ...rest }) => {
    const thisPages = useMemo(() => pages || []);

    return <Router>
        <LayoutWrapComponent pages={thisPages} {...rest} />
    </Router>
}

Demo.defaultProps = {
    pages: pages,
    IconComponent: NumberIcon,
    LayoutWrapComponent: LayoutWrap,
}

export default Demo;