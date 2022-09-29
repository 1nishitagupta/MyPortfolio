import React from 'react'
import "./banner.css"

function Banner(props) {
  return (
    <section className='section1' id={props.aref}>
      <div className="container">
        <div className="banner">
          <div className="intro">
            <div className="heading1">
              <h1>Hi!!</h1>
              <p>I'm Nishita Gupta</p>
              <p>Frontend Developer</p>
            </div>
          </div>
          {/* <div className="pic">
            <img src="images/mypic.png" alt="My Picture" />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Banner