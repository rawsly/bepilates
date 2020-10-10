import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const Subscribe = () => {
  const [initData, setInitData] = useState({
    heading:
      "Geç kalmadan kendin için pilates ve yoga ders programlarını incele!",
    btnText: "Keşfet!",
    link: '#',
  })

  const data = useStaticQuery(graphql`
    query {
      bgImg: file(relativePath: { eq: "subscribe-bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const bgImg = data?.bgImg?.childImageSharp?.fluid

  return (
    <section className="start-free-area">
      <div className="container">
        <div className="col-12">
          <BackgroundImage
            className="start-free-content d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between shadow-lg"
            fluid={bgImg}
          >
            <div className="subscribe-content">
              <div className="start-free-text">
                <h2 className="mb-2">{initData.heading}</h2>
              </div>
              <div className="start-free-btn mt-4 mt-lg-0">
                <a href="#" className="btn btn-bordered">
                  <span>{initData.btnText}</span>
                </a>
              </div>
            </div>
          </BackgroundImage>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
