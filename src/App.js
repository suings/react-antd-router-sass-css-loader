import React from "react";
import {BrowserRouter as Router, Route,} from "react-router-dom";
import {Layout} from 'antd';

import Home from './pages/Home'
import style from './App.scss'

const {Header, Footer, Content} = Layout;

export default function AppRoute() {
    return (
        <div>
            <Layout className="layout">
                <Header style={{backgroundColor: '#1890ff'}}>
                    导航部分
                </Header>
                <Content className={style.content}>
                    <Router>
                        <Route exact path="/" component={Home}/>
                    </Router>
                </Content>
                <Footer style={{textAlign: 'center'}}>XXX©2019 Created by XXX</Footer>
            </Layout>
        </div>
    );
}