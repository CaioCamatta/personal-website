import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ffea7c`,
    }} className="sm:border-black sm:border-8"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        paddingHorizontal: `1.0875rem`,
        textAlign: 'center',
      }} className="py-16 sm:py-32"
    >
      <h1 style={{ margin: 0, color: '#1d1d1b'}} className="text-4xl sm:text-5xl md:text-6xl">{siteTitle}</h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
