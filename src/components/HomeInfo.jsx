
import React from "react";
import { Link } from "react-router-dom";
/* import { arrow } from "../assets/icons"; */

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>

    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      {/* <img src={arrow} className="w-4 h-4 object-contain" /> */}
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-2xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hello, I'm <span className="font-semibold">Daniel</span> 👋
      <br />A Software Developer
    </h1>
  ),
  2: (
    <InfoBox
      text="Discover My Journey"
      link="/about"
      btnText="Explore Now"
      description="Dive into my professional background, skills, and the driving force behind my career in software development."
    />
  ),
  3: (
    <InfoBox
      text="Browse through my curated collection of projects"
      link="/projects"
      btnText="View Projects"
      description="Browse through my curated collection of projects, showcasing my problem-solving capabilities and technical expertise."
    />
  ),
  4: (
    <InfoBox
      text="Professional Collaboration"
      link="/contact"
      btnText="Get In Touch"
      description="Learn more about the companies I've partnered with, the projects we've tackled, and how we can work together to turn your ideas into reality."
    />
  ),
};


const HomeInfo = ({ stage }) => {
  return renderContent[stage] || null;
};

export default HomeInfo;
