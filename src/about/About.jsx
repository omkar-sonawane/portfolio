
import React from 'react'
import "./About.css"
import ME from "../assets/new_dp.jpeg"
import { FaAward } from "react-icons/fa"
import { GiGraduateCap } from "react-icons/gi"
import { VscFolderActive } from "react-icons/vsc"




const About = () => {
  return (
    <section id='about'>

      <h2 className='abtme p-8 text-2xl font-semibold '>About Me</h2>

      <div className="container about__container">

        <span data-aos="zoom-in" data-aos-duration="1500">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="image " />
            </div>
          </div>
        </span>

        <div className="about__content">
          <div className="about__cards">


            <span data-aos="zoom-in" data-aos-duration="1500">
              <article className="about__card">
                <center>   <FaAward className='about-icon' /></center>
                <h4>Experience</h4>
                <small> Fresher </small>
              </article>
            </span>

            <span data-aos="zoom-in" data-aos-duration="1500">
              <a href="#education" style={{ color: "white" }}>
                <article className="about__card">
                  <center>  <GiGraduateCap className='about-icon' /></center>
                  <h4>Education</h4>
                  <small> Master's Degree In Computer Science </small>
                </article>
              </a>
            </span>

            <span data-aos="zoom-in" data-aos-duration="1500">

              <a href="#Portfolio" style={{ color: "white" }}>
                <article className="about__card">
                  <center>
                    <VscFolderActive className='about-icon' />
                  </center>
                  <h4>Projects</h4>
                  <small> 5+ Completed </small>
                </article>
              </a>
            </span>

          </div>

          <p data-aos="zoom-in" data-aos-duration="1500" style={{ textAlign: "justify" }}>An enthusiastic computer science graduate with excellant management and leadership skills ready to invest all skills
          learned in the academic years to an organization which provides opportunities to utilize my skills and knowledge.
          </p>

        </div>

      </div>
    </section>

  )
}

export default About
