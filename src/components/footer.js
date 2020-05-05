import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ props }) => (
    <footer style={{
        background: `#f8ce6a`,
    }}>
        <div style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `6rem 1.0875rem`,
            textAlign: 'center',
        }}>

            <h3 style={{ margin: 0, color: 'white', fontSize: 20, }}>© {new Date().getFullYear()}. Made in London, ON with ❤.</h3>
        </div>
    </footer>
)

export default Footer