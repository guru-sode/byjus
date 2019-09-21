import React, { Component } from 'react';
import { Carousel, Row, Col, Skeleton, Popover, Button } from 'antd';
import 'antd/dist/antd.css';
import JobPopOver from './JobPopOver';
import JobCarousel from './JobCarousel';

class JobCard extends Component {
    constructor(props) {
        super(props);
        this.getJobCard = this.getJobCard.bind(this);
    }

    getJobCard(data) {
        let carousel = [];
        if (data) {
            let jobs = data.data;
            let from = this.props.from;
            let to = from + 21;
            jobs.slice(from, to).map(job => {
                carousel.push(
                    <Popover content={<JobPopOver job={job} />} title={job.title.slice(0, 25)} trigger="hover" placement="rightTop" arrowPointAtCenter key={job._id}>
                        <JobCarousel job={job} />
                    </Popover>
                )
            })
        }
        else {
            return (
                <div style={{ height: "100vh" }}>
                    <Skeleton />
                </div>
            )
        }
        return carousel;
    }

    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: 600 }}>
            <Row gutter={8}>
                {this.getJobCard(this.props.data)}
            </Row>
        </div>
        );
    }
}

export default JobCard;