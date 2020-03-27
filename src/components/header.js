import React from 'react'
import './new-design.css'

const logo = require('../../assets/images/brain-white-64.png')

const Header = () => (
  <header className="site-header site-header--green-bg">
    <div className="site-header__site-name">
      <a className="site-header__site-name-link" href="/">
        <img
          className="site-header__site-name-logo"
          alt="brainbase logo"
          src={logo}
        />
        <span className="site-header__site-name-text">BrainBase Blogg</span>
      </a>
    </div>

    <div className="site-header__toolbar">
      <ul className="site-menu">
        <li className="site-menu__item">
          <a
            className="site-menu__link site-menu__link--active"
            href="https://www.brainbase.no/"
          >
            BrainBase.no
          </a>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
