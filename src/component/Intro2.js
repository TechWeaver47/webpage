import React from 'react'
import'../styles/Intro2.css'

function Intro2() {
  return (
   <section className='second-section'>
    <h2>some randome text</h2>
    <div className='container'>
        <div className='card'>
          <img src='#' alt='picture' className='box' />
          <p >this is some subtext under illustration or image</p>
        </div>
        <div className='card'>
           <img src='#' alt='picture' className='box' />
           <p >this is some subtext under illustration or image</p>
        </div>
        <div className='card'>
            <img src='#' alt='picture' className='box' />
            <p>this is some subtext under illustration or image </p>
        </div>
        <div className='card'>
            <img src='#' alt='picture' className='box'/>
            <p>this is some subtext under illustration or image</p>
        </div>

    </div>
   </section>
  )
}

export default Intro2
