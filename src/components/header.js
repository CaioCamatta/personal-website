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
        }} className="mb-2 pt-10 md:pt-2"
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            paddingHorizontal: `1.0875rem`,
            textAlign: 'center',
          }} className=""
        >
          <Img fluid={data.file.childImageSharp.fluid} alt="Caio Camatta Coelho Profile Picture" className="h-16 w-16 sm:h-24 sm:w-24 rounded-full mx-auto p-b-2" />
          <h1 style={{ color: '#333' }} className="text-4xl sm:text-5xl md:text-6xl mt-2">{siteTitle}</h1>
          <p className="text-md pt-2">Western University '22</p>
          <p className="text-md pt-0 sm:pb-0">London, ON</p>
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
