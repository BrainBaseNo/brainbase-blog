import React from 'react'

const Hero = ({text}) => (
    <section className="section section--green-bg">
      <div className="content-wrapper"
        ><h1 className="heading heading--level-1">{text}</h1>
      </div>
    </section>
)

export default Hero