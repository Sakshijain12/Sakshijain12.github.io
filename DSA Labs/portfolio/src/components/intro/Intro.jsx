import React from "react"
import "./intro.scss"
import im from './photo.jpeg'


export default function intro() {
  return (
  <div className='intro' id="intro">
    <div className="left">
      <div className="imageContainer">
      <img src={im} alt="" />
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1> Sakshi Jain</h1>
        <h3> Second year mechanical student <span > At IIT Jodhpur</span></h3>
      </div>
    </div>
  </div>
  )
}
