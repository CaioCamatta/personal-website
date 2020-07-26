import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ props }) => (
    <footer>
        <div style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1rem 1.0875rem 2rem 1.0875rem`,
            textAlign: 'center',
        }}>

            <h3 style={{ margin: 0, color: '#a0958a', fontSize: 17 }}>© {new Date().getFullYear()} Caio Camatta Coelho. Work in progress.</h3>
        </div>
    </footer>
)

export default Footer
