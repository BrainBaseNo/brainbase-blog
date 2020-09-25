import React from 'react'

const Hero = ({ title }) => (
  <article className="home-page__right-people--article">
    <Title align="center">Dropp mellomleddet</Title>
    <Paragraph big align="center">
      Brainbase er et nettverk med over 450 flinke og erfarne konsulenter i teknologibransjen. 
      Her kan du lese litt om våre erfaringer.
    </Paragraph>
  </article>
)

const Title = ({ align, children, className, ...props }) => (
  <h1
      {...props}
      style={{ textAlign: align || undefined, ...props.style }}
      className={`typography__title ${className || ""}`}
  >
      {children}
  </h1>
);

const Paragraph = ({ big, align, children, className, ...props }) => (
  <p
      {...props}
      style={{ textAlign: align || undefined, ...props.style }}
      className={`typography__paragraph${(big && "--big") || ""} ${className || ""}`}
  >
      {children}
  </p>
);


export default Hero
