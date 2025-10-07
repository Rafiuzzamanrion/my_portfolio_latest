/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import portfolioData from "../../data/sections/projects.json";

const WorksThreeColumnWithFilter = ({ filterPosition }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000)
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
            } smplx col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".portfolio">Portfolio</span>
              <span data-filter=".landingpage">Landing Page</span>
              <span data-filter=".ecommerce">E-commerce</span>
              <span data-filter=".business">Business Management</span>
              <span data-filter=".service">Service</span>
              <span data-filter=".news">News</span>
            </div>
          </div>

          <div className="gallery full-width">
            {portfolioData.map((project, index) => (
              <div key={index} className={`col-lg-4 col-md-6 items ${project.category}${project.marginClass ? ' ' + project.marginClass : ''}`}>
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link href={project.link} target="_blank">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img style={{height:'350px', objectFit:'cover', objectPosition:'right'}} src={project.image} alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="cont">
                  <h6>{project.title}</h6>
                  <span>
                    {project.tags.map((tag, tagIndex) => (
                      <React.Fragment key={tagIndex}>
                        <a href={project.link}>{tag}</a>
                        {tagIndex < project.tags.length - 1 && ", "}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;