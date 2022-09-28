import React from "react";

function Qualification() {
  const education = [
    {
      "name":"University Maharani College",
      "year":"2019-2022",
      "degree":"Bachelors in Computer Applications",
    },
    {
      "name":"Maheshwari Sr. Sec. School",
      "year":"2017-2019",
      "degree":"Bachelors in Computer Applications",
    } 
  ];
  console.log(education)
  return (
    <section className="section4">
      <div className="container">
        <div className="education">
          <div className="heading">
            <p>Qualifications</p>
            <span>My Education</span>
          </div>
          {
          
            education.map((i,index) => (
            
              <div key={index} className="ed-boxes">
                <div className="ed-box">
                  <h1>{i.name}</h1>
                  <p>{i.year}</p>
                  <p>{i.degree}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Qualification;
