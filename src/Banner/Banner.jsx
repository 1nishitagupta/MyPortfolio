import React from 'react'
import "./banner.css"
import Zoom from 'react-reveal/Zoom';

function Banner(props) {
  return (
    <section className='section1' id={props.aref}>
      <div className="container">
        <div className="banner">
          <Zoom>
          <div className="intro">
            <div className="heading1">
              <h1>Hi!!</h1>
              <p>I'm Nishita Gupta</p>
              <p>Frontend Developer</p>
            </div>
          </div>
          </Zoom>
          {/* <div className="pic">
            <img src="images/mypic.png" alt="My Picture" />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Banner