import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='IT CAN ONLY GET FASTER ' subtitle='Get your package to its destination swiftly.' />

          <form className='flex'>
            <div className='box'>
              <span>State</span>
              <input type='text' placeholder='State' />
            </div>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='City' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
