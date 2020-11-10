import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Welcome = () => {
  const [initData, setInitData] = useState({
    content:
      "Bahçeşehir'de pilates ve yoga studyomuzda herkes için bir ders planımız mevcut.",
    headingDetail: "için bir pilates ve yoga studyosu",
    btnText: "Dersleri İncele",
    link: '/#agile-form'
  });

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "header-bg.png" }) {
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
          <div className="col-12 col-md-12 col-lg-12">
            <div className="welcome-intro text-center">
              <h2 className="cd-headline clip fw-3 mt-2 mt-sm-3 changing-text">
                <span className="text-white mr-2">bir pilates ve yoga studyosu.</span>
                <span className="cd-words-wrapper">
                    <b className="text-white is-visible">Gelişimin için</b>
                    <b className="text-white">Performansın için</b>
                    <b className="text-white">Sana özel</b>
                </span>
              </h2>
              <p className="text-white my-4">{initData.content}</p>
              <Link to={initData.link} className="btn btn-bordered-white">
                <span>{initData.btnText}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-8 col-md-5 mx-auto">
            {/* Seoul Thumb */}
            <div className="seoul-thumb text-center pt-5">
              <Img fluid={data.image.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome
