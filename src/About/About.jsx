import React from "react";
import "./about.css"
import DownloadIcon from '@mui/icons-material/Download';

function About(props) {
  return (
    <section className="section2" id={props.aref}>
      <div className="container">
        <div className="about">
          <div className="heading">
            <p>About Me</p>
            <span>My introduction</span>
          </div>
          <div className="about-main">
            <div className="pic">
              <img src="images/mypic.png" alt="pic" />
            </div>
            <div className="about-para">
              <div className="about-1">
              <p>
                During my Graduation, I spent the months learning (HTML, CSS,
                JavaScript, ReactJs) both as a Trainee and as a student.
              </p>
              <p>
                I have worked on a multitude of web Development projects (PHP,
                HTML, CSS, JS, WordPress, Bootstrap, Responsive Layouts),
                eCommerce.
              </p>

              <p>
                I am currently working in DURAPID TECHNOLOGIES as Associate Software
                Developer. I am always available to discuss your project over
                the phone or via Skype.
              </p>
              <div className="about-boxes">
                <div className="box">
                  <span>0-1</span>
                  <span>Experience</span>
                </div>
                <div className="box">
                  <span>10+</span>
                  <span>Projects</span>
                </div>
                <div className="box">
                  <span>0</span>
                  <span>Worked</span>
                </div>
              </div>
              <div className="download-cv">
                <button>
                  <DownloadIcon></DownloadIcon> Download CV
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
