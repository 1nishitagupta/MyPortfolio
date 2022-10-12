import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function FeedBack() {
  const feedback = useSelector((state) => state.feedback);
  let data = JSON.parse(localStorage.getItem("storedDetail"));



 console.log(data)
  

  return (
    <section>
      <div className="container">
        <div className="heading">
          <p>FeedBacks</p>
          <span></span>
        </div>
        <div>
        <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                padding:"20px 30px",
                gap:"10px"
              }}
              >
                <span style={{boxShadow:"1px 1px 5px 1px #9d9d9d",padding:"20px 30px"}}>{data.message}</span>
                <span>{data.email}</span>
                <span>{data.name}</span>
                
              </div>
          

          {/* {feedback.map((feed,index) => {
            return (
              <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                padding:"20px 30px",
                gap:"10px"
              }}
              key={index}
              >
                <span style={{boxShadow:"1px 1px 5px 1px #9d9d9d",padding:"20px 30px"}}>{feed.message}</span>
                <span>{feed.email}</span>
                <span>{feed.name}</span>
                
              </div>
            );
          })} */}
        </div>
      </div>
    </section>
  );
}

export default FeedBack;


