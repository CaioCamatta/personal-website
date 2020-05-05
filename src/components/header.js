import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#F65058`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `7.45rem 1.0875rem`,
        textAlign: 'center',
      }}
    >
      <h1 style={{ margin: 0, color: 'white'}} className="text-3xl sm:text-4xl md:text-6xl">{siteTitle}</h1>
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
