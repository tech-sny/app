import React, { Component } from 'react'
import './HomeComponent.scss' 
import portifolio from '../../Image/portifolio.png'
import project from '../../Image/project.png'
import experience from '../../Image/experience.png'
import tech from '../../Image/tech.png'
import about from '../../Image/about.png'
import education from '../../Image/education.png'
import resume from '../../Image/resume.png'
import BodyComponent from '../BodyComponent/BodyComponent'

export default class HomeComponent extends Component {
  render() {
    return (
      <div className='home'>
        <div className='header'>
            <div className='home-icon'>
                <img className="home-icon-image" src={portifolio} alt="home" />
                <p>My Portifolio</p>
            </div>
            <div className='project-icon'>
            <a href='#project'><img className="project-icon-image" src={project} alt="project" /></a>
            <p>Projects</p>
            </div>
            <div className='education-icon'>
            <a href='#education'><img className="education-icon-image" src={education} alt="education" /></a>
            <p>Education</p>
            </div>
            <div className='experience-icon'>
            <a href='#exp'><img className="experience-icon-image" src={experience} alt="experience" /></a>
            <p>Experiences</p>
            </div>
            <div className='tech-icon'>
            <a href='#skill'><img className="tech-icon-image" src={tech} alt="tech" /></a>
            <p>Skills</p>
            </div>
            <div className='about-icon'>
            <img className="about-icon-image" src={about} alt="about" />
            <p>About me</p>
            </div>
            <div className='resume-icon'>
            <img className="resume-icon-image" src={resume} alt="resume" />
            <p>Resume</p>
            </div>
        </div>
        <div className='body' id='pro'>{<BodyComponent/>}</div>
        <div className='footer'>footer</div>
      </div>
    )
  }
}
