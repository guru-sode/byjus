import React, { Component } from 'react';
import { Layout, Input, Carousel, Row, Col, Skeleton, Pagination, Badge } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;
const { Search } = Input;

class PageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pageSize: 21
        };
        this.getJobCard = this.getJobCard.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentWillMount() {
        const url = "http://nut-case.s3.amazonaws.com/jobs.json"
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    data
                })
            })
            .catch((e) => {
                this.setState({
                    isError: true
                })
            })
    }

    onChangePage(page, pageSize) {
        this.setState({
            page,
            pageSize
        })
    }

    handleSearch(value) {
        let keyword = value.toLowerCase();
        if(this.state.data){
            let jobs = this.state.data.data;
            let filteredJobs = {};
            filteredJobs.data = jobs.filter(job =>{
                if(job.companyname.toLowerCase().includes(keyword) || job.title.toLowerCase().includes(keyword) || job.location.toLowerCase().includes(keyword) || job.skills.toLowerCase().includes(keyword))
                return job
            })
            this.setState({
                data: filteredJobs
            })
        }
    }

    getJobCard(jobs) {
        let carousel = [];
        if (jobs) {
            let from = (this.state.page - 1) * this.state.pageSize;
            let to = from + 21;
            jobs.data.slice(from, to).map(job => {
                carousel.push(
                    <Col span={8} key={job._id}>
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
            <div>
                <Header style={{ alignContent: "center" }}>
                    <div style={{float:"left"}}>
                    <Badge count={this.state.data ? this.state.data.data.length : 0} overflowCount={this.state.data ? this.state.data.data.length : 2000} showZero={true} offset={[25,5]}>
                        <a> Total Jobs</a>
                    </Badge>
                    </div>
                    <Search style={{ width: 200, float: "right", marginTop: "1%" }} placeholder="Search Job..." onSearch={value => this.handleSearch(value)} enterButton />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <Row gutter={8}>
                            {this.getJobCard(this.state.data)}
                        </Row>
                        <Pagination onChange={this.onChangePage} total={this.state.data ? this.state.data.data.length : 21} defaultPageSize={21} />
                    </div>
                </Content>
            </div>
        );
    }
}

export default PageContent;