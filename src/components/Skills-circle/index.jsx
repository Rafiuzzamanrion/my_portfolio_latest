import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillsCircle = ({ subBG, theme }) => {
  const cpStyle = {
    path: {
      stroke: "#75dab4",
    },
    trail: {
      stroke: theme ? (theme == "dark" ? "#0f1218" : "#e5e5e5") : "",
    },
    text: {
      fill: theme ? (theme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "14px",
    },
  };

  return (
    <section
      style={{paddingBottom:'7rem'}}
      className={`skills-circle pt-100 ${
        subBG ? "sub-bg" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="">
              <div className="row">
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={100}
                        strokeWidth={2}
                        text="3+ Years"
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Full Stack</span>
                      <h6>Web Development</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={100}
                        strokeWidth={2}
                        text="Expert"
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>React & Next.js</span>
                      <h6>Frontend Development</h6>
                    </div>
                  </div>
                </div>

              </div>
              <div className={'row mt-md-3'}>
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".9">
                    <div className="skill">
                      <CircularProgressbar
                        value={100}
                        strokeWidth={2}
                        text="Expert"
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Node.js & APIs</span>
                      <h6>Backend Development</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay="1.2">
                    <div className="skill">
                      <CircularProgressbar
                        value={100}
                        strokeWidth={2}
                        text="50+"
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Web Applications</span>
                      <h6>Project Delivery</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCircle;