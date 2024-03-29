import React from 'react'
import './styles-from-main-site.css'
import './header.css'

const Header = () => (
  <header className="site-header">
      <div className="content-wrapper site-header__content">
          <div className="site-header__site-name">
              <a className="site-header__site-name-link" href="/">
                  <img
                      className="site-header__site-name-logo"
                      src="https://www.brainbase.no/public/images/logo/brain-green-dark-64.png"
                      alt=""
                      width={32}
                      height={32}
                  />
                  <span className="site-header__site-name-text">BrainBase</span>
                  <span className='site-header__blog-marker'>blogg</span>
              </a>
          </div>
          <div className="site-header__toolbar">
            <a href="https://www.brainbase.no/" className="typography__link">
                Til BrainBase.no
            </a>
          </div>
      </div>
  </header>
)

export default Header
