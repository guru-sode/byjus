import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Content from './Content';
import Foot from './Footer';

class HomePage extends Component {
    render() {
        return (
            <Layout className="layout">
                <Content />
                <Foot />
          </Layout>
        );
    }
}

export default HomePage;