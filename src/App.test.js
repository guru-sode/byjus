import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import JobPopOver from './components/JobPopOver';
import JobCarousel from './components/JobCarousel';
import JobCard from './components/JobCard';
import Footer from './components/Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render job popover', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobPopOver job={
    {
      "_id": "5b2b8a98263a5020388e87dc",
      "title": "Senior Knowledge Analyst CKA",
      "applylink": "https://www.techgig.com/jobs/Senior-Knowledge-Analyst-CKA/59843",
      "jd": "",
      "companyname": "Boston Consultancy Group",
      "location": "Bengaluru/Bangalore",
      "experience": "4-6 yrs",
      "salary": "",
      "type": "",
      "skills": "cassandra",
      "startdate": "",
      "enddate": "",
      "created": "",
      "source": "techgig",
      "timestamp": 1528959791.958316,
      "__v": 0
      }
  }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render job carousel', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobCarousel job={
    {
      "_id": "5b2b8a98263a5020388e87dc",
      "title": "Senior Knowledge Analyst CKA",
      "applylink": "https://www.techgig.com/jobs/Senior-Knowledge-Analyst-CKA/59843",
      "jd": "",
      "companyname": "Boston Consultancy Group",
      "location": "Bengaluru/Bangalore",
      "experience": "4-6 yrs",
      "salary": "",
      "type": "",
      "skills": "cassandra",
      "startdate": "",
      "enddate": "",
      "created": "",
      "source": "techgig",
      "timestamp": 1528959791.958316,
      "__v": 0
      }
  }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render job card', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobCard data={ 
     {data : [
       {
      "_id": "5b2b8a98263a5020388e87dc",
      "title": "Senior Knowledge Analyst CKA",
      "applylink": "https://www.techgig.com/jobs/Senior-Knowledge-Analyst-CKA/59843",
      "jd": "",
      "companyname": "Boston Consultancy Group",
      "location": "Bengaluru/Bangalore",
      "experience": "4-6 yrs",
      "salary": "",
      "type": "",
      "skills": "cassandra",
      "startdate": "",
      "enddate": "",
      "created": "",
      "source": "techgig",
      "timestamp": 1528959791.958316,
      "__v": 0
      },
      {
        "_id": "5b2b8a9a263a5020388e87dd",
        "title": "Lead - Software Engineering",
        "applylink": "https://www.techgig.com/jobs/Lead-Software-Engineering/59655",
        "jd": "",
        "companyname": "Fidelity Mutual Fund",
        "location": "Chennai",
        "experience": "7-9 yrs",
        "salary": "",
        "type": "",
        "skills": "Blockchain",
        "startdate": "",
        "enddate": "",
        "created": "",
        "source": "techgig",
        "timestamp": 1528959791.958316,
        "__v": 0
        }
    ]}
  } from={0}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders footer', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
