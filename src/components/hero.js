import React from 'react'

const Hero = ({title}) => (
    <section className="section section--green-bg">
      <div className="content-wrapper"
        ><h1 className="heading heading--level-1">{title}</h1>
      </div>
    </section>
)

export default Hero