import React from "react";
import { Rating, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function FeedBack() {
  const [value, setValue] = useState();

  const feedback = useSelector((state) => state.feedback);
  let data = JSON.parse(localStorage.getItem("storedDetail"));

  

  return (
    <section>
      <div className="container">
        <div className="heading">
          <p>FeedBacks</p>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              fontSize: "3vw",
            }}
          >
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>

          {feedback.map((feed, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px 30px",
                  gap: "10px",
                }}
                key={index}
              >
                <span
                  style={{
                    boxShadow: "1px 1px 5px 1px #9d9d9d",
                    padding: "20px 30px",
                  }}
                >
                  {feed.message}
                </span>
                <span>{feed.email}</span>
                <span>{feed.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeedBack;
