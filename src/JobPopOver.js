import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

class JobPopOver extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { job } = this.props
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
        );
    }
}

export default JobPopOver;