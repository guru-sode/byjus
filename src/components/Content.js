import React, { Component } from 'react';
import { Layout, Input, Carousel, Row, Col, Skeleton, Pagination, Badge, Popover, Button, InputNumber } from 'antd';
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
        this.getContent = this.getContent.bind(this);
        this.onChangeExp = this.onChangeExp.bind(this);
    }

    componentWillMount() {
        const url = "http://nut-case.s3.amazonaws.com/jobs.json"
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    data,
                    dataForSearch: data
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

    onChangeExp(e) {
        let userExp = parseInt(e.target.value);
        if(userExp){
            if (this.state.data) {
                let jobs = this.state.dataForSearch.data;
                let filteredJobs = {};
                filteredJobs.data = jobs.filter(job => {
                    if(job.experience && job.experience !== " "){
                        let reqExp = job.experience.split("-");
                        let minReqExp = reqExp[0];
                        if(reqExp[1]){
                            var expAndYr = reqExp[1].split(" ");
                            var maxExp = expAndYr[0];
                        }
                        if(maxExp){
                            if(userExp >= minReqExp && userExp <= maxExp){
                                return job
                            }
                        }
                    }
                })
                this.setState({
                    data: filteredJobs,
                    page: 1
                })
            }
        }
    }

    getContent(job) {
        return(
            <div>
            <p>Title : {job.title.slice(0, 25)}</p>
            <p>Company :{job.companyname.slice(0, 25)}</p>
            <p>Experience :{job.experience.slice(0, 25)}</p>
            <p>Location :{job.location.slice(0, 25)}</p>
            <p>Skills :{job.skills.slice(0, 25)}</p>
            <p>Salary :{job.salary.slice(0, 25)}</p>
            <p>Source :{job.source.slice(0, 25)}</p>
            <Button type="primary" href={job.applylink} style={{marginLeft:"35%"}}>Apply</Button>
        </div>
        )
    }

    handleSearch(value) {
        let keyword = value.toLowerCase();
        if (this.state.data) {
            let jobs = this.state.dataForSearch.data;
            let filteredJobs = {};
            filteredJobs.data = jobs.filter(job => {
                if (job.companyname.toLowerCase().includes(keyword) || job.title.toLowerCase().includes(keyword) || job.location.toLowerCase().includes(keyword) || job.skills.toLowerCase().includes(keyword))
                    return job
            })
            this.setState({
                data: filteredJobs,
                page: 1
            })
        }
    }

    getJobCard(data) {
        let carousel = [];
        if (data) {
            let jobs = data.data;
            let from = (this.state.page - 1) * this.state.pageSize;
            let to = from + 21;
            jobs.slice(from, to).map(job => {
                carousel.push(
                    <Popover content={this.getContent(job)} title={job.title.slice(0, 25)} trigger="hover" placement="rightTop" arrowPointAtCenter>
                        <Col span={8} xs={{span: 12}} sm={{span: 12}} md={{span: 8}} key={job._id}>
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
            <div>
                <Header style={{ alignContent: "center" }}>
                    <div style={{ float: "left" }}>
                        <Badge count={this.state.data ? this.state.data.data.length : 0} overflowCount={this.state.data ? this.state.data.data.length : 2000} showZero={true} offset={[25, 5]}>
                            <a> Total Jobs</a>
                        </Badge>
                    </div>
                    <Search style={{ width: 200, float: "right", marginTop: "2%" }} placeholder="Search Job..." onSearch={value => this.handleSearch(value)} enterButton />
                    <div style={{ float: "right", marginRight: "2%" }}>
                    <a>  Experience(In Years) </a>
                    <InputNumber min={0} max={50} defaultValue={0} onPressEnter={this.onChangeExp} />
                    </div>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 600 }}>
                        <Row gutter={8}>
                            {this.getJobCard(this.state.data)}
                        </Row>
                    </div>
                    <Pagination onChange={this.onChangePage} total={this.state.data ? this.state.data.data.length : 0} defaultPageSize={21} defaultCurrent={1} style={{ marginBottom: 0 }} />
                </Content>
            </div>
        );
    }
}

export default PageContent;