import React from 'react';
import js from '/public/img/slid/js.png';
import react from '/public/img/slid/react.png';
import nextjs from '/public/img/slid/nextjs-1.png';
import nodejs from '/public/img/slid/nodejs.png';
import express from '/public/img/slid/express.png';
import mongodb from '/public/img/slid/mongodb.png';
import mysql from '/public/img/slid/mysql.png';
import git from '/public/img/slid/git.png';
import html from '/public/img/slid/html.png';
import css from '/public/img/slid/css.png';
import tailwind from '/public/img/slid/tailwind.png';
import bs from '/public/img/slid/bs.png';
import Marquee from "react-fast-marquee";

const Skills = () => {
  let skills = [
    { name: 'JavaScript', img: js },
    { name: 'React', img: react },
    { name: 'Next.js', img: nextjs },
    { name: 'Node.js', img: nodejs },
    { name: 'Express.js', img: express },
    { name: 'MongoDB', img: mongodb },
    { name: 'MySQL', img: mysql }, ,
    { name: 'Git', img: git },
    { name: 'HTML5', img: html },
    { name: 'CSS3', img: css },
    { name: 'Tailwind CSS', img: tailwind },
    { name: 'Bootstrap', img: bs },
  ];
  return (
    <section className="intro-section section-padding wow fadeInUp" data-wow-delay=".5s">
      <div className="container">
<div>
  <Marquee
    speed={70}
    gradient={false}
    pauseOnHover={true}
    direction={"left"}
  >
    <div className={'pt-2 pb-2'}>
      {skills.map((skill, index) => (
        <div key={index} style={{
          display: 'inline-block',
          margin: '0 40px',
          textAlign: 'center',
          boxShadow: '0 0 10px 0 rgba(117, 218, 180, 0.4)',
          padding: '10px',
          borderRadius: '8px',
          backgroundColor: "#11141b",
          width:'110px',
          height:'115px'
        }}>
          <img src={skill.img.src} alt={skill.name} style={{ width: '60px', height: '60px' }} />
          <p style={{ marginTop: '10px', fontSize: '14px' }}>{skill.name}</p>
        </div>
      ))}
    </div>
  </Marquee>

  <Marquee
    speed={70}
    gradient={false}
    pauseOnHover={true}
    direction={"right"}
    className={'mt-50'}
  >
    <div className={'pt-2 pb-2'}>
      {skills.map((skill, index) => (
        <div key={index} style={{
          display: 'inline-block',
          margin: '0 40px',
          textAlign: 'center',
          boxShadow: '0 0 10px 0 rgba(117, 218, 180, 0.4)',
          padding: '10px',
          borderRadius: '8px',
          backgroundColor: '#11141b',
          width:'110px',
          height:'115px'
        }}>
          <img src={skill.img.src} alt={skill.name} style={{ width: '60px', height: '60px' }} />
          <p style={{ marginTop: '5px', fontSize: '14px' }}>{skill.name}</p>
        </div>
      ))}
    </div>
  </Marquee>
</div>
      </div>
    </section>
  );
};

export default Skills;