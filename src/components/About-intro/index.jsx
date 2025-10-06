import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who Am I ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  I am a passionate Full Stack Web Developer specializing in building innovative web applications and interactive user experiences. Leveraging modern technologies like React, Next.js, and Node.js, I transform complex ideas into scalable digital solutions. My portfolio showcases a commitment to clean code, performance, and delivering successful projects for clients and businesses. I hold a B.Sc. in Computer Science and Engineering, which provides a strong foundation in both theoretical and practical aspects of software development.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;