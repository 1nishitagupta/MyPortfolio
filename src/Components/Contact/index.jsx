import React from "react";
import {TextField} from '@mui/material'

import "./contact.css";

function Contact(props) {
  function Form() {
    return (
      <div className="form">
        <h1>Contact Me Here</h1>
        <form action="">
          <div className="field">
            {/* <label htmlFor="">Name</label> */}
            <TextField id="standard-basic" label="Name" variant="standard" />
          </div>
          <div className="field">
            {/* <label htmlFor="">E-mail</label> */}
            <TextField id="standard-basic" label="Email" variant="standard" />
          </div>
          <div className="field">
            {/* <label htmlFor="">Phone</label> */}
            <TextField id="standard-basic" label="Phone" variant="standard" />
          </div>
          <div className="field">
            <label htmlFor="">Message</label>
            <textarea name="" id="" ></textarea>
          </div>
          <div className="submit">
            <button>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <section className="contact section" id={props.aref}>
      <div className="container">
        <div className="heading">
          <p>Contact Me</p>
          <span>Let's Connect</span>
        </div>
        <div className="contact-container">
          <div className="top"></div>
          <div className="bottom"></div>
          <Form/>
        </div>
      </div>
    </section>
  );
}

export default Contact;
