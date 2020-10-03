import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { HEADING_MESSAGES } from '../../constants';

const Welcome = () => {
  const [initData, setInitData] = useState({
    content:
      "Bahçeşehir'de pilates ve yoga studyomuzda herkes için bir ders planımız mevcut.",
    headingDetail: "için bir pilates ve yoga studyosu",
    btnText: "Dersleri İncele",
    link: '#'
  });
  const [headingMessageIndex, setHeadingMessageIndex] = useState(0);

  useEffect(() => {
    const headingChangeInterval = setInterval(() => {
      setHeadingMessageIndex(prevHeadingMessageIndex => (prevHeadingMessageIndex + 1) % HEADING_MESSAGES.length);
    }, 3000);

    return () => {
      clearInterval(headingChangeInterval);
    }
  }, []);

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header-bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section
      id="home"
      className="section welcome-area bg-overlay bg-inherit h-100vh"
    >
      <div className="container">
        <div className="row justify-content-center">
          {/* Welcome Intro Start */}
          <div className="col-12 col-md-10 col-lg-8">
            <div className="welcome-intro text-center">
              <h1 className="text-white">
                <span>{HEADING_MESSAGES[headingMessageIndex]}</span>
                {initData.headingDetail}
              </h1>
              <p className="text-white my-4">{initData.content}</p>
              <a href="#" className="btn btn-bordered-white">
                <span>{initData.btnText}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-8 col-md-5 mx-auto">
            {/* Seoul Thumb */}
            <div className="seoul-thumb text-center pt-5">
              <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome
