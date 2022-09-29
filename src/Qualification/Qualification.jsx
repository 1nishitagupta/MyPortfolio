import React from "react";
import "./qualification.css"
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { EvStation } from "@mui/icons-material";

function Qualification(props) {
  const education = [
    {
      "name":"University Maharani College",
      "year":"2019-2022",
      "degree":"Bachelors in Computer Applications",
    },
    {
      "name":"Maheshwari Sr. Sec. School",
      "year":"2017-2019",
      "degree":"12th",
    },
    {
      "name":"Maheshwari Sr. Sec. School",
      "year":"2012-2017",
      "degree":"10th",
    }  
  ];
  const training = [
    {
      "name":"Durapid Technologies",
      "role":"Asscociate Software Developer",
      "degree":"Front-end Development",
    },  
    {
      "name":"Full Stack Learning",
      "role":"Trainee",
      "degree":"Full Stack Development",
      
    },
    {
      "name":"Let's Grow More",
      "role":"Web Developer Intern",
      "degree":"Web Developement",
    }
    
  ];

  return (
    <section className="section4" id={props.aref}>
      <div className="container">
        <div className="education">
          <div className="heading">
            <p>Qualifications</p>
            <span>My Education</span>
          </div>
          <div className="education-container">

          <Tabs>
            <TabList>
              <Tab>Education</Tab>
              <Tab>Training</Tab>
            </TabList>

            <TabPanel>
            {
          
          education.map((i,index) => (
              <div key={index} className="ed-box">
                <div className="left"></div>
                <div className="ed-data-wrapper">
                  <div className="ed-data"><h1><SchoolIcon/><span>{i.name}</span></h1></div>
                  <div className="ed-data"><p><CalendarMonthIcon/><span>{i.year}</span></p></div>
                  <div className="ed-data"><p><WorkspacePremiumIcon/><span>{i.degree}</span></p></div>
                </div>
              </div>
            
        ))}
            </TabPanel>
            <TabPanel>
            {
          
          training.map((i,index) => (
           
              <div key={index} className="ed-box">
                <div className="ed-data"><h1><WorkIcon/><span>{i.name}</span></h1></div>
                <div className="ed-data"><p><PersonIcon/><span>{i.role}</span></p></div>
                <div className="ed-data"><p><WorkspacePremiumIcon/><span>{i.degree}</span></p></div>
              </div>
            
        ))}
            </TabPanel>
          </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
