import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./portfolio.css";

function Portfolio(props) {
  function Slider() {
    return (
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        <div class="item">
          <h4>1</h4>
        </div>
        <div class="item">
          <h4>2</h4>
        </div>
        <div class="item">
          <h4>3</h4>
        </div>
        <div class="item">
          <h4>4</h4>
        </div>
        <div class="item">
          <h4>5</h4>
        </div>
        <div class="item">
          <h4>6</h4>
        </div>
        <div class="item">
          <h4>7</h4>
        </div>
        <div class="item">
          <h4>8</h4>
        </div>
        <div class="item">
          <h4>9</h4>
        </div>
        <div class="item">
          <h4>10</h4>
        </div>
        <div class="item">
          <h4>11</h4>
        </div>
        <div class="item">
          <h4>12</h4>
        </div>
      </OwlCarousel>
    );
  }

  


  function Slider2(){

    const work = ["tesla", "moshified", "admitcard", "to-do", "safetravel", "signal", "netflix"]
    return(
      <div class="project-grid">
						{
            work.map((i)=>(
            
                <img src={`projects/${i}.jpg`} alt=""/>
              
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
