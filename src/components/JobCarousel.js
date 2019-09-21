import React, { Component } from 'react';
import { Carousel, Col } from 'antd';
import 'antd/dist/antd.css';

class JobCarousel extends Component {
    render() {
        const { job } = this.props;
        return (
            <Col span={8} xs={{span: 12}} sm={{span: 12}} md={{span: 8}}>
            <div style={{ margin: "2%" }}>
                <Carousel>
                    <div>
                        <h3>{job.title.slice(0, 25)}</h3>
                    </div>
                    <div>
                        <h3>{job.companyname.slice(0, 25)}</h3>
                    </div>
                    <div>
                        <h3>{job.skills.slice(0, 25)}</h3>
                    </div>
                    <div>
                        <h3>{job.experience.slice(0, 25)}</h3>
                    </div>
                </Carousel>
            </div>
        </Col>
        );
    }
}

export default JobCarousel;