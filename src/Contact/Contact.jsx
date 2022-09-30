import React from "react";
import "./contact.css";

function Contact() {
  function Form() {
    return (
      <div className="form">
        <h1>Contact Me Here</h1>
        <form action="">
          <div className="field">
            <label For="">Name</label>
            <input type="text" />
          </div>
          <div className="field">
            <label For="">E-mail</label>
            <input type="text" />
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
    <section className="contact section" id="contact">
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
