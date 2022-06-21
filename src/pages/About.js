import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic_lucas_weissman.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered" 
          style={{paddingTop: "55px"}}>
            <img 
              className="profile_image"
              // Image goes here
              src = {profile_pic_name}
              
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Lucas Weissman</div>
            <div className="brief_description">
            Hey there!! I am Lucas Weissman, a Brazilian born and raised in Campinas, São Paulo. 
            I am a student at Williams College in Massachusetts, Class of 2024, majoring in Computer Science with a concentration 
            in Science & Technology Studies. I am interested in exploring the intersection of Data Science and Artificial Intelligence 
            with the social sciences. I hope someday to become a researcher and help solve some of humanity’s biggest challenges 
            by developing cutting-edge technology.
            </div>
          </div>
        </div>
    </div>
    )
  }
}