import React from "react";
import './portfolio.css'

function Portfolio(props) {
  return (
    <section className="work section" id={props.aref}>
      <div className="container">
        <div className="heading">
            <p>Portfolio</p>
            <span>My Portfolio</span>
        </div>

        <div className="work__container bd-grid">
          
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
