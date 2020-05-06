import PropTypes from "prop-types"
import React from "react"
import Image from "./Image"
import styles from './clickablePosting.module.css'

export default function ClickablePosting(props) {

    return (
        <div className={`bg-white rounded-lg overflow-hidden my-5 md:my-8 w-4/5 mx-auto border-2 border-black buttonShadow ${styles.buttonShadow}`}>
            <a href={props.link} target="_blank" >
                <div className="flex px-4 py-3">
                    <div className="flex-shrink-0 content-center mt-auto mb-auto pr-1">
                        <Image filename={props.image} className="h-12 w-12" alt={props.imageAlt} class="h-12 w-12" />
                    </div>
                    <div className="mx-2 sm:mx-4 text-left justify-center flex">
                        <div className="my-auto">
                            <h4 className="sm:text-base md:text-xl leading-tight text-gray-700 font-light">{props.title}</h4>
                            <p className={`text-xs sm:text-sm leading-tight text-gray-600 ${props.customDescriptionClass}`} style={{ paddingTop: 2 }}>{props.description}</p>
                        </div>
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
    customDescriptionClass: PropTypes.string,
}

ClickablePosting.defaultProps = {
    title: `Eleifend maximus`,
    description: "Nunc purus sem, cursus vel massa eu, eleifend maximus nulla.",
    link: "https://www.google.com",
    image: "gatsby-astronaut.png",
    imageAlt: "Caio Camatta Coelho",
    customDescriptionClass: "",
}
