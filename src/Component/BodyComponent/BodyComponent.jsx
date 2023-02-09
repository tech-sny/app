import React, { Component } from "react";
import "./BodyComponent.scss";
import axios from 'axios';
import { useState,useEffect } from "react";

function BodyComponent() {
  
  const imagePrefix="https://filestora.blob.core.windows.net/image/";

  const [project, setProject] = useState([]);
  useEffect(() => {
   axios
       .get("https://life-care.azurewebsites.net/project")
     
       .then(function (response) {
           console.log(response);
           setProject(response.data);
       })
       
       .catch(function (error) {
           console.log(error);
       });
},[]);
const [about, setAbout] = useState([]);
useEffect(() => {
 axios
     .get("https://life-care.azurewebsites.net/about")
   
     .then(function (response) {
         console.log(response);
         setAbout(response.data);
     })
     
     .catch(function (error) {
         console.log(error);
     });
},[]);
const [education, setEducation] = useState([]);
  useEffect(() => {
   axios
       .get("https://life-care.azurewebsites.net/education")
     
       .then(function (response) {
           console.log(response);
           setEducation(response.data);
       })
       
       .catch(function (error) {
           console.log(error);
       });
},[]);
    return (
      <div className="body">
        {about.map((x)=>(
        <div className="body-about">
          <div className="body-about-me">
            <h2 className="para">{x.name}</h2>
            <p className="para">
              {x.content}
            </p>
          </div>
          <div className="body-about-pic">
            <img className="pic" src={imagePrefix+x.image} alt="my-pic"></img>
          </div>
        </div>))}

        <div className="project" id="project">
          <h2 className="head">Project</h2>
          <div className="proContainer">
            {project.map((x)=>(
              <div className="aPro">
              <div className="pImg">
                <img className="pImg-img" src={imagePrefix+x.image} alt="" />
              </div>
              <div className="pName">
                {x.name}
              </div>
              <div className="pDes">
                {x.content}
                <br />
                <a href="https://www.ijeat.org/wp-content/uploads/papers/v8i5S3/E10090785S319.pdf">
                  IJEAT Publication
                </a>
                <br />
                <br />
                <p className="tech-stack">
                  {x.skill}
                </p>
              </div>
            </div>
            ))}
             
            
            
          </div>
          
        </div>
        <div className="edu" id="education">
          <h2 className="head">Education</h2>
          {
            education.map((x)=>(
              <div className="edu-container">
            <div className="edu-img">
              <img className="img" src={imagePrefix+x.image} alt="iit"></img>
            </div>
            <div className="edu-content">
              <h3 className="headerName1">
                {x.name}
              </h3>
              <h6 className="headerName">{x.degree}</h6>
              <h6 className="headerName">
                {x.specialization}
              </h6>
              <h6 className="headerName">Year : {x.year}</h6>
              <h6 className="headerName">
                Location : {x.location}
              </h6>
            </div>
          </div>
            ))
          }
        </div>
        <div className="exp" id="exp">
          <h2 className="head">Experience</h2>
          <div className="exp-name">Valeo Well-beign</div>
            <div className="edu1">
              <div className="edu-img"></div>
              <div className="edu-content"></div>
            
          </div>
        </div>
        <div className="skill" id="skill">
          <h2 className="head">Technology</h2>
          <div className="edu-container">
            <div className="edu1">
              <div className="edu-img"></div>
              <div className="edu-content"></div>
            </div>
          </div>
        </div>
        <div className="resume">
          <a href={imagePrefix+about.map((x)=>(x.resume))} target="_blank">Download the resume</a>
        </div>
      </div>
    );
  }
export default BodyComponent;
