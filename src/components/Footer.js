import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Footer } = Layout;

class Foot extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>Byju's Job Site ©2019 Created by Gurukiran</Footer>
        );
    }
}

export default Foot;