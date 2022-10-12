import React, { useState , useEffect } from "react";
import { add } from "../store/feedbackSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./feedback.css";

function Feedback() {
  const dispatch = useDispatch();
  

  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };
  
  function HomeButton() {
    const navigate = useNavigate();

    function handleClick() {
      navigate("/");
    }

    

    return (
      <button className="home-button" type="button" onClick={handleClick}>
        Go home
      </button>
    );
  }

  function handleFeed(e, feedback) {
    e.preventDefault();
    dispatch(add(feedback));
    localStorage.setItem("storedDetail", JSON.stringify(feedback));
    setFeedback({ name: "", email: "", message: "" });
  }


  return (
    <section className="feed-section">
      <div className="container feed">
        <HomeButton />
        <div className="heading">
          <span>Give Your Feedback</span>
          <div className="form">
            <h1>Give Your Review</h1>
            <form action="">
              <div className="field">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="name"
                  value={feedback.name}
                  onChange={handleChange}
                  autoFocus
                />
              </div>
              <div className="field">
                <label htmlFor="">E-mail</label>
                <input
                  type="mail"
                  name="email"
                  value={feedback.email}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="">Message</label>
                <textarea
                  name="message"
                  value={feedback.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="submit">
                <button onClick={(e) => handleFeed(e, feedback)}>Submit</button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
