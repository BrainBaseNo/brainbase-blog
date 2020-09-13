import React from 'react'
import './new-design.css'

const Header = () => (
  <header className="site-header">
      <div className="content-wrapper site-header__content">
          <div className="site-header__site-name">
              <a className="site-header__site-name-link" href="/">
                  <img
                      className="site-header__site-name-logo"
                      src="https://www.brainbase.no/public/images/logo/brain-green-dark-64.png"
                      alt=""
                  />
                  <span className="site-header__site-name-text">BrainBase</span>
              </a>
          </div>
          <div className="site-header__toolbar">
            <a href="https://www.brainbase.no/" className="typography__link">
                BrainBase.no
            </a>
          </div>
      </div>
  </header>
)

export default Header
