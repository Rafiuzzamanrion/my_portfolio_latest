import React from "react";

const IntroTxt = ({subBG}) => {
  return (
    <header
      className={`freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`}
      style={{backgroundImage: "url(/img/slid/imageM.jpg)"}}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <h6>Hello, I&apos;m</h6>
              <h1>Rafiuzzaman Rion<span className={'main-color fw-800'}>.</span></h1>
              <h4>Full Stack Web Developer</h4>
              <div className="social-icon">
                <a href="https://www.facebook.com/rafiuzzaman5683/"  target={'_blank'} className="icon" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.linkedin.com/in/rafiuzzaman-rion-ba3575291/" target={'_blank'} className="icon" rel="noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/rafiuzzaman_rion/" target={'_blank'} className="icon" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                
                <a href="#0" className="icon">
                  <i className="fab fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IntroTxt;
