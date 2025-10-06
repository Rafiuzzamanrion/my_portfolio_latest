/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/slid/image-2.jpg"
                alt="About Rafiuzzaman Rion"
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  About Me.
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  I am a Full Stack Web Developer with a passion for crafting innovative web applications and digital solutions. My expertise spans both frontend and backend development, delivering reliable, scalable, and user-friendly experiences for clients and businesses.
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> My Mission
                  </h6>
                  <p>
                    To transform ideas into powerful digital products through clean code, modern technologies, and a commitment to excellence.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> My Goals
                  </h6>
                  <p>
                    To deliver high-quality, scalable web applications that solve real-world problems and help clients achieve their business objectives.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Choose Me?
                  </h6>
                  <p>
                    I combine technical expertise with a client-focused approach, ensuring every project is completed efficiently and exceeds expectations.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;