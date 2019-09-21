import React, { Component } from 'react';
import { Layout, Input, Carousel, Row, Col, Skeleton } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;
const { Search } = Input;

class PageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.getJobCard = this.getJobCard.bind(this);
    }

    componentWillMount(){
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

     onChangeCarousel(a, b, c) {
        console.log(a, b, c);
      }

    getJobCard(jobs){
        let carousel=[];
        if(jobs){
            jobs.data.slice(0,21).map(job=>{
                carousel.push(
                        <Col span={8} key={job._id}>
                            <div style={{margin:"2%"}}>
                    <Carousel afterChange={this.onChangeCarousel}>
                    <div>
                      <h3>{job.title.slice(0,25)}</h3>
                    </div>
                    <div>
                      <h3>{job.companyname.slice(0,25)}</h3>
                    </div>
                    <div>
                      <h3>{job.skills.slice(0,25)}</h3>
                    </div>
                    <div>
                      <h3>{job.experience.slice(0,25)}</h3>
                    </div>
                  </Carousel>
                  </div>
                  </Col>
                )
            })
        }
        else{
            return (
                <div style={{height:"100vh"}}>
            <Skeleton />
            </div>
            )
        }
        return carousel;
    }

    render() {
        return (
            <div>
            <Header style={{alignContent: "center"}}>
            <Search style={{ width: 200, float: "right", marginTop: "1%" }} placeholder="Search Job..." onSearch={value => console.log(value)} enterButton />
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Row gutter={8}>
                    {this.getJobCard(this.state.data)}
                    </Row>
              </div>
            </Content>
            </div>
        );
    }
}

export default PageContent;