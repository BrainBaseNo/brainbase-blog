import React from 'react'
import './hero.css'

const Hero = ({ title }) => (
  <section className="blog-hero">
    <p className="typography__paragraph ">
      <a className="typography__link" href="https://www.brainbase.no/">BrainBase</a> er et nettverk av over 800 konsulenter i teknologibransjen. 
    </p>
    <p className="typography__paragraph blog-hero__last-paragraph">
      Her kan du lese litt om våre <span style={{display: "inline-block"}}>erfaringer. 👇</span>
    </p>
  </section>
)

export default Hero
