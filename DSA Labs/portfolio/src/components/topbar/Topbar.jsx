import './topbar.scss'
import React from "react"


export default function topbar({ menuOpen , setMenuOpen }) {
  return (
  <div className={'topbar ' + (menuOpen && "active")}>
    <div className='wrapper'>
      <div className='left'>
        <a href="#intro" className="logo">
            Home
        </a>       
        <div className='itemContainer'>
          <img src='https://toppng.com/uploads/preview/email-icon-vector-circle-11549825158ieiklzfl8g.png' className='icon' />
          <span>jainsakshi2019@gmail.com</span>
        </div>
      </div>
      
      <div className='right'>
        <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>
    </div>
  </div>
  )
}


