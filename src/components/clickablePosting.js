import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const styles = {
    box: {
        padding: 5,
    }
}

export default function ClickablePosting(props) {
    const data = useStaticQuery(graphql`
      query {
        icon: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    return (
        <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4">
            <div className="flex px-4 py-2 ">
                <div className="flex-shrink-0 content-center mt-auto mb-auto pr-3">
                    <Img fluid={data.icon.childImageSharp.fluid} className="h-12 w-12" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-4 sm:text-left">
                    <h4 className="text-xl leading-tight">{props.title}</h4>
                    <p className="text-sm leading-tight text-gray-600">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

ClickablePosting.propTypes = {
    description: PropTypes.string,
    description: PropTypes.string,
}

ClickablePosting.defaultProps = {
    title: `Eleifend maximus`,
    description: "Nunc purus sem, cursus vel massa eu, eleifend maximus nulla.",
}
