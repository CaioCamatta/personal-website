import PropTypes from "prop-types"
import React from "react"
import Image from "./Image"

const styles = {
    box: {
        padding: 5,
    }
}

export default function ClickablePosting(props) {

    return (
        <div className=" bg-white shadow-lg rounded-lg overflow-hidden m-4 md:w-4/5 mx-auto">
          <a href={props.link} target="_blank" >
            <div className="flex px-4 py-3 ">
                <div className="flex-shrink-0 content-center mt-auto mb-auto pr-1">
                    <Image filename={props.image} className="h-12 w-12" alt={props.imageAlt} class="h-12 w-12"/>
                </div>
                <div className="md:mt-1 mt-0 mt-2 mx-4 text-left">
                    <h4 className="md:text-xl leading-tight text-gray-700 font-light">{props.title}</h4>
                    <p className="text-sm leading-tight text-gray-600" style={{paddingTop: 2}}>{props.description}</p>
                </div>
            </div>
          </a>
        </div>
    )
}

ClickablePosting.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
}

ClickablePosting.defaultProps = {
    title: `Eleifend maximus`,
    description: "Nunc purus sem, cursus vel massa eu, eleifend maximus nulla.",
    link: "https://www.google.com",
    image: "gatsby-astronaut.png",
    imageAlt: "Caio Camatta Coelho",
  }
