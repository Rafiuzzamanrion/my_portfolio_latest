import React from "react";
import Split from "../Split";
import Link from "next/link";

const Services1 = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Best Features
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Services.
            </h3>
          </Split>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 item-box bg-img wow fadeInLeft"
            data-wow-delay=".3s"
            style={{ backgroundImage: "url(/img/slid/img-5.png)", backgroundPosition:'center' }}
          >
            <h4 className="custom-font">
              Best Of <br /> My Features
            </h4>
            <Link href="/about/about-dark">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>See All Projects</span>
              </a>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s"
          >
            <span className="icon pe-7s-config"></span>
            <h6>Full Stack Web Development</h6>
            <p>
              Complete web applications using modern frameworks and technologies.
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".7s"
          >
            <span className="icon pe-7s-monitor"></span>
            <h6>
              Frontend Development
            </h6>
            <p>Responsive, interactive user interfaces with Next.js, React, HTML5, CSS3, JavaScript and TypeScript.</p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".9s"
          >
            <span className="icon pe-7s-server"></span>
            <h6>
              Backend Development
            </h6>
            <p>Robust server-side solutions, APIs, and database architecture.</p>
          </div>
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default Services1;
