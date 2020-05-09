import PropTypes from "prop-types"
import React from "react"
import { graphql, StaticQuery } from "gatsby" // to query for image data
import Img from "gatsby-image" // to take image data and render it

const query = graphql`
  query {
    file(relativePath: { eq: "Profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <StaticQuery query={query} render={data => {
    return (
      <header
        style={{
          background: `#F65058`,
        }} className="sm:border-black sm:border-8 mb-8 sm:mb-0 "
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            paddingHorizontal: `1.0875rem`,
            textAlign: 'center',
          }} className=" pt-16 pb-24 sm:py-16"
        >
          <h1 style={{ margin: 0, color: '#fff' }} className="text-4xl sm:text-5xl md:text-6xl">{siteTitle}</h1>
          <p className="text-md text-white pt-3">Western University '22</p>
          <p className="text-md text-white pt-0 sm:pb-0">London, ON</p>
          <Img fluid={data.file.childImageSharp.fluid} alt="Caio Camatta Coelho Profile Picture" className="h-20 w-20 sm:h-32 sm:w-32 rounded-full mx-auto p-b-2 mt-4 sm:border-8 border-black -mb-32" />
        </div>
      </header>
    )

  }}
  />
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
