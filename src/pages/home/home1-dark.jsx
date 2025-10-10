import React from "react";
import AboutUs1 from "../../components/About-us1";
import BlogsTwoColumnSlider from "../../components/Blogs-two-column-slider";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import IntroWithSlider1 from "../../components/Intro-with-slider1";
import Navbar from "../../components/Navbar";
import Numbers1 from "../../components/Numbers";
import Services1 from "../../components/Services1";
import SkillsCircle from "../../components/Skills-circle";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import Works1Slider from "../../components/Works1-slider";
import DarkTheme from "../../layouts/Dark";
import IntroTxt from "../../components/Intro-txt";
import Skills from "../../components/about-skills/skills";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";

const Homepage1 = () => {
  const MainContent = React.useRef(null);

  return (
    <DarkTheme>
      <NavbarFullMenu />
      <IntroTxt subBG />
      <div ref={MainContent} className="main-content">
        <AboutUs1 />
        <Services1 />
        <Numbers1 />
        <Works1Slider />
        <VideoWithTestimonials />
        <SkillsCircle theme="dark" subBG />
        <Skills/>
        <Clients1 theme="dark" />
        {/*<BlogsTwoColumnSlider />*/}
        <CallToAction subBG />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Homepage1;
