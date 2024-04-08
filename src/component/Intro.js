import React from 'react'
import '../styles/Intro.css';

function Intro() {
  return (
    <section className='first-section'>
        <div className='text'>
            <h1>this website is awesome</h1>
            <p className='introtext'>This website has some subtext that goes here under the main title. its a smaller font and the color is lower contrast</p>
            <button className='btn'>Sign up</button>


        </div>
        <img src='#' alt='this placeholder for an image' className='fsection-img' />
    </section>
    
  )
}

export default Intro
