import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import cssModule from "../components/index.module.css"
import ClickablePosting from "../components/clickablePosting"
import { SocialIcon } from 'react-social-icons';

const styles = {
  workExperience: {
    color: "#fff"
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="">
      <div style={{
        margin: `0 auto`,
        maxWidth: 960,
        minHeight: 600,
        padding: `0 1.0875rem 1.45rem`,
      }}>
        {/* <h2 className="text-center pt-10 text-5xl">WORK</h2> */}

        <h3 className="text-2xl sm:text-3xl md:text-5xl pt-16 pb-2 text-gray-800 font-light text-center">Websites</h3>
        <ClickablePosting title="JCC Construction" description="Website Design, Backend in Python, SEO, Online Ads" image="symbol.png" imageAlt="JCC Construtora" link="https://jcconstrutora.com.br/" />
        <ClickablePosting title="Central Truck and Trailer Shop" description="Website Design" image="truckandtrailer.png" imageAlt="Central Truck and Trailer" link="https://www.centraltruckandtrailer.com/" />
        <h3 className="text-2xl sm:text-3xl md:text-5xl pt-16 pb-2 text-gray-800 font-light text-center">Apps</h3>
        <ClickablePosting title="Movie Finder" description="2020 - Harvard CS50 Assignment - React Native" image="moviefinder.png" imageAlt="Movie Finder" link="https://expo.io/@caiocamatta/Movie-Finder" />
        <ClickablePosting title="Study Timer" description="2020 - Harvard CS50 Assignment - React Native" image="studytimer.png" imageAlt="Study Timer" link="https://expo.io/@caiocamatta/study-timer" />
        <ClickablePosting title="Tapping Tiles" description="2016 - Google Play - C# Unity " image="tappingtiles.png" imageAlt="Tapping Tiles" link="https://play.google.com/store/apps/details?id=com.CaioCoelho.TappingTiles" />

        <h3 className="text-2xl sm:text-3xl md:text-5xl pt-16 pb-2 text-gray-800 font-light text-center">Hackathons</h3>
        <ClickablePosting title="Hack Western 2019" description="c++ docker git json machine-learning python scikit-learn" image="hackwestern6.jpg" imageAlt="Hack Western 2019" link="https://devpost.com/software/smartcommute" />
        <ClickablePosting title="Hack The North 2019" description="azure firebase javascript python" image="hackthenorth2019.jpg" imageAlt="Hack the North 2019" link="https://devpost.com/software/conscious-crowd" />
        <ClickablePosting title="Hack Western 2018 - Winner" description="electron google-cloud google-cloud-vision javascript" image="alyn.png" imageAlt="Hack Western 2018" link="https://devpost.com/software/align-dui5lc" />
        <ClickablePosting title="Hack The North 2018" description="azure css html5 python reddit" image="hackthenorth2018.jpg" imageAlt="Hack the North 2018" link="https://devpost.com/software/moodmatch" />

        <div className="pt-16 text-center">
          <SocialIcon url="http://twitter.com/CamattaCaio" className="no-underline bg-transparent mx-1" style={{ backgroundImage: "none" }} />
          <SocialIcon url="https://www.instagram.com/camattacaio/" className="no-underline bg-transparent mx-1" style={{ backgroundImage: "none" }} />
          <SocialIcon url="linkedin.com/in/caio-coelho/" className="no-underline bg-transparent mx-1" style={{ backgroundImage: "none" }} />
        </div>
      </div>
    </div>

    {/* <div className="bg-gray-800">
      <div style={{
        margin: `0 auto`,
        maxWidth: 960,
        minHeight: 600,
        padding: `0 1.0875rem 1.45rem`,
      }}>

        <div className="text-white py-4 px-6" styles={styles.workExperience}>
          <h2 className="md:text-5xl pt-2 pb-2 text-md">Work Experience</h2>
          <p>Sales and Marketing Coordinator - MakerBars</p>
          <p>Business Development Intern - Propel at Western University</p>
          <p>Web Developer - JCC Construction</p>
          <p>Research Assistant - Instituto Federal do Espirito Santo</p>
          <h2 className="md:text-xl pt-4 pb-2">Programming Experience</h2>
          <h4>Languages</h4>
          <p>Python, Javascript, C, Java, Assembly</p>
          <h4>Libraries</h4>
          <p>Django, Flask, Tensorflow, Pandas, Scikit-Learn</p>
          <p>React, React-Native, Gatsby</p>
          <h4>Concepts</h4>
          <p>Git, Linux/Unix, Google Cloud, REST APIs</p>
          <p>Web Design, Web Development, Machine Learning, Data Analysis, Mobile App Development</p>
          <p>Data Structures, Object-Oriented Programming</p>
        </div>
      </div>
    </div> */}

  </Layout>
)

export default IndexPage
