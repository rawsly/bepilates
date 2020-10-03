import React, { useState } from "react"
import _ from "lodash"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const images = useStaticQuery(graphql`
    query {
      first: file(relativePath: { eq: "about-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      second: file(relativePath: { eq: "about-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [data, setData] = useState([
    {
      heading: "Uzman pilates eğitmeni Boncuk Bıçakçı'yla tanışın.",
      content:
        "Spor bilimi ve eğitmenliği üzerine aldığı onca eğitim ve edindiği tecrübeyle birlikte kurumumuzun kurucu ortağı Boncuk Bıçakçı ile tanışın.Yoga ve Reformer Pilates eğitmeni olan Boncuk Bıçakcı 7 yılın üzerinde özel ders tecrübesi ile üyelerine özel egzersiz metodolojileri sunuyor. Bahçeşehir pilates merkezimizde Boncuk Bıçakçı’yla tanışabilir onun eşsiz pilates ve yoga eğitimlerinden, tecrübelerinden faydalanabilirsiniz.",
      type: "video",
      url: "https://www.youtube.com/watch?v=zxoyMGpEWrE",
      image: images?.first?.childImageSharp?.fluid,
      imagePosition: "left",
    },
    {
      heading: "Özel pilates dersinde uzman deneyim.",
      content:
        "Tecrübeli ve uluslararası içerik planlayan eğitmenlerimiz, size özel pilates dersi kavramının ötesinde egzersiz deneyimi yaratıyor. Bahçeşehir pilates studyomuzda postur analizinden duruş bozukluklarına, sıkılaşmadan klinik ve hamile pilatesine kadar birçok ileri seviye uzmanlık gerektiren eğitimler ancak böylesine eğitimli ve tecrübeli eğitmenlerden alınabilir.",
      type: "image",
      url: "#",
      image: images?.second?.childImageSharp?.fluid,
      imagePosition: "right",
    },
  ])

  const AboutImage = ({ aboutData }) => (
    <div className="col-12 col-lg-6">
      {/* About Thumb */}
      <div className="about-thumb text-center d-none d-lg-block p-relative">
        {aboutData.type === 'video' && (
          <div className="video-btn-container">
            <a className="play-btn video-btn" data-fancybox href={aboutData.url}>
              <i className="icofont-ui-play" />
            </a>
          </div>
        )}
        <Img fluid={aboutData.image} />
      </div>
    </div>
  )

  return _.map(data, sectionItem => (
    <section className="section about-app-area ptb_100">
      <div className="shapes-container">
        <div className={`shape-1 shape-${sectionItem.imagePosition}`} />
      </div>
      <div className="container">
        <div className="row align-items-center">
          {sectionItem.imagePosition === "left" && (
            <AboutImage aboutData={sectionItem} />
          )}
          <div className="col-12 col-lg-6">
            {/* About Text */}
            <div className="about-text">
              {/* Headings */}
              <div className="headings d-flex align-items-center mb-4">
                <h2 className="text-capitalize">{sectionItem.heading}</h2>
              </div>
              <p className="my-3">{sectionItem.content}</p>
              {/* Store Buttons */}
            </div>
          </div>
          {sectionItem.imagePosition === "right" && (
            <AboutImage aboutData={sectionItem} />
          )}
        </div>
      </div>
    </section>
  ))
}

export default About
