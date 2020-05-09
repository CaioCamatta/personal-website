import React from "react"
import { Link } from "gatsby"
import Gallery from 'react-grid-gallery';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image" // to take image data and render it

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.css"
import ClickablePosting from "../components/clickablePosting"
import { SocialIcon } from 'react-social-icons';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


const images = [];

const styles = {
  workExperience: {
    color: "#fff"
  },
  greenBrush: {
    background: "linear-gradient(180deg,rgba(255,255,255,0) 65%, #88CF8FAA 50%)",
    backgroundPosition: "0px -5px",
  },
  purpleBrush: {
    background: "linear-gradient(180deg,rgba(255,255,255,0) 65%, #CA99D7AA 50%)",
    backgroundPosition: "0px -5px",
  },
  pinkBrush: {
    background: "linear-gradient(180deg,rgba(255,255,255,0) 65%, #FFACBAAA 50%)",
    backgroundPosition: "0px -5px",
  },
  paleBrush: {
    background: "linear-gradient(180deg,rgba(255,255,255,0) 65%, #feeedeAA 50%)",
    backgroundPosition: "0px -5px",
  }
}

const query = graphql`
query {
  allFile(
    filter: {
      relativeDirectory: { eq: "photos" }
    }
  ) {
    edges {
      node {
        base
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}`


class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      srcsLoaded: false,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
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

            <h3 className={`text-3xl sm:text-3xl md:text-6xl mt-10 sm:mt-16 xl:mt-24 pb-2 text-gray-800 font-light inline-block pr-4`} style={styles.greenBrush}>Websites</h3>
            <ClickablePosting title="JCC Construction" description="Website Design, Backend in Python, SEO, Online Ads" image="symbol.png" imageAlt="JCC Construtora" link="https://jcconstrutora.com.br/" />
            <ClickablePosting title="Central Truck and Trailer Shop" description="Website Design" image="truckandtrailer.png" imageAlt="Central Truck and Trailer" link="https://www.centraltruckandtrailer.com/" />

            <h3 className="text-3xl sm:text-3xl md:text-6xl mt-10 sm:mt-16 xl:mt-24 pb-2 text-gray-800 font-light inline-block pr-4" style={styles.pinkBrush}>Apps</h3>
            <ClickablePosting title="Movie Finder" description="2020 - Harvard CS50 Assignment - React Native" image="moviefinder.png" imageAlt="Movie Finder" link="https://expo.io/@caiocamatta/Movie-Finder" />
            <ClickablePosting title="Study Timer" description="2020 - Harvard CS50 Assignment - React Native" image="studytimer.png" imageAlt="Study Timer" link="https://expo.io/@caiocamatta/study-timer" />
            <ClickablePosting title="Tapping Tiles" description="2016 - Google Play - C# Unity " image="tappingtiles.png" imageAlt="Tapping Tiles" link="https://play.google.com/store/apps/details?id=com.CaioCoelho.TappingTiles" />

            <h3 className="text-3xl sm:text-3xl md:text-6xl mt-10 sm:mt-16 xl:mt-24 pb-2 text-gray-800 font-light inline-block pr-4" style={styles.paleBrush}>Hackathons</h3>
            <ClickablePosting title="Hack Western 2019" description="c++ docker git json machine-learning python scikit-learn" image="hackwestern6.jpg" imageAlt="Hack Western 2019" link="https://devpost.com/software/smartcommute" customDescriptionClass="hidden md:block" />
            <ClickablePosting title="Hack The North 2019" description="azure firebase javascript python" image="hackthenorth2019.jpg" imageAlt="Hack the North 2019" link="https://devpost.com/software/conscious-crowd" customDescriptionClass="hidden md:block" />
            <ClickablePosting title="Hack Western 2018 - Winner" description="electron google-cloud google-cloud-vision javascript" image="alyn.png" imageAlt="Hack Western 2018" link="https://devpost.com/software/align-dui5lc" customDescriptionClass="hidden md:block" />
            <ClickablePosting title="Hack The North 2018" description="azure css html5 python reddit" image="hackthenorth2018.jpg" imageAlt="Hack the North 2018" link="https://devpost.com/software/moodmatch" customDescriptionClass="hidden md:block" />

            <h3 className="text-3xl sm:text-3xl md:text-6xl mt-10 sm:mt-16 xl:mt-24 pb-2 text-gray-800 font-light inline-block pr-4" style={styles.purpleBrush}>Photos</h3>
            <div className='my-5 md:my-8'>
              <StaticQuery
                query={query}
                render={data => (
                  <div className="flex flex-wrap -mx-2">
                    <div className="hidden">
                      {images.length == 0 && (data.allFile.edges.map(image => (
                        images.push(image.node.childImageSharp.fluid.srcSet.split(',')[5].slice(1,-5))
                      )))}
                    </div>
                    {data.allFile.edges.map(image => (

                      <div class="w-1/2 sm:w-1/3 p-1 sm:p-2 cursor-pointer" onClick={() => this.setState({ isOpen: true })}>
                        <Img
                          fluid={image.node.childImageSharp.fluid}
                          alt={image.node.base.split(".")[0].split("_").join(" ")} // only use section of the file extension with the filename
                          className=""
                        />
                      </div>
                    ))}
                    {isOpen && (
                      <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                          })
                        }
                      />
                    )}
                  </div>
                )}
              />
            </div>

            <div className="pt-20 pb-2   text-center">
              <SocialIcon url="https://github.com/CaioCamatta" className="no-underline bg-transparent mx-1" style={{ backgroundImage: "none" }} />
              <SocialIcon url="http://twitter.com/CamattaCaio" className="no-underline bg-transparent mx-1" style={{ backgroundImage: "none" }} />
              <SocialIcon url="https://www.instagram.com/camattacaio/" className="no-underline bg-transparent mx-1" style={{ backgroundImage: "none" }} />
              <SocialIcon url="https://www.linkedin.com/in/caio-coelho/" className="no-underline bg-transparent mx-1" style={{ backgroundImage: "none" }} />
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

      </Layout >
    )
  }

}



export default IndexPage
