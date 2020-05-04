import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/index.module.css"
import ClickablePosting from "../components/clickablePosting"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 style={{fontSize: 50}}>WORK</h2>
    <h3>Apps</h3>
    <p>https://expo.io/@caiocamatta/Movie-Finder Expo - React-native assignment (2020)</p>
    <p>https://expo.io/@caiocamatta/study-timer Expo - React-native assignment (2020)</p>
    <p>Tapping Tiles Google Play - C# (2016)</p>

    <ClickablePosting />

    <h3>Websites</h3>
    <p>https://jcconstrutora.com.br/</p>

    <h3>Hackathons</h3>
    <p>https://devpost.com/software/smartcommute HackWestern 2019</p>
    <p>c++ docker git json machine-learning python scikit-learn</p>
    <p>https://devpost.com/software/conscious-crowd Hack The North 2019</p>
    <p>azure firebase javascript python</p>
    <p>👑 https://devpost.com/software/align-dui5lc HackWestern 2018</p>
    <p>electron google-cloud google-cloud-vision javascript</p>
    <p>https://devpost.com/software/moodmatch Hack The North 2018</p>
    <p>azure css html5 python reddit</p>

    <h2>Work Experience</h2>
    <p>Sales and Marketing Coordinator - MakerBars</p>
    <p>Business Development Intern - Propel at Western University</p>
    <p>Web Developer - JCC Construction</p>
    <p>Research Assistant - Instituto Federal do Espirito Santo</p>

    <h2>Programming Experience</h2>
    <h4>Languages</h4>
    <p>Python, Javascript, C, Java, Assembly</p>
    <h4>Libraries</h4>
    <p>Django, Flask, Tensorflow, Pandas, Scikit-Learn</p>
    <p>React, React-Native, Gatsby</p>
    <h4>Concepts</h4>
    <p>Git, Linux/Unix, Google Cloud, REST APIs</p>
    <p>Web Design, Web Development, Machine Learning, Data Analysis, Mobile App Development</p>
    <p>Data Structures, Object-Oriented Programming</p>

    <p>https://www.instagram.com/camattacaio/</p>
    <p>linkedin.com/in/caio-coelho</p>
  </Layout>
)

export default IndexPage
