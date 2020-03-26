import React from 'react'

const Hero = ({ title, date }) => (
  <header className="section section--green-bg">
    <div className="content-wrapper" style={{ minHeight: '96px' }}>
      <h1 className="heading heading--level-1">{title}</h1>
      {date && <p style={{ paddingLeft: '1rem' }}>Publisert: {date}</p>}
    </div>
  </header>
)

export default Hero
