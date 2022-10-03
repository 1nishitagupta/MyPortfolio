import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./portfolio.css";

function Portfolio(props) {
  function Slider2(){

    const work = ["tesla", "moshified", "admitcard", "to-do", "safetravel", "signal", "netflix"]
    return(
      <div className="project-grid">
						{
            work.map((i,index)=>(
            
                <img key={index} src={`projects/${i}.jpg`} alt=""/>
              
            ))
            }
						
					</div>
    )
  }
  return (
    <section className="work section" id={props.aref}>
      <div className="container portfolio-section">
        <div className="heading">
          <p>Portfolio</p>
          <span>My Portfolio</span>
        </div>
        <Slider2/>
      </div>
    </section>
  );
}

export default Portfolio;
