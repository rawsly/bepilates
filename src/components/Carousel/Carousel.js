import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"
import Img from "gatsby-image"
import Title from "../Title/Title"

const Carousel = () => {
  const images = useStaticQuery(graphql`
    query {
      c1: file(relativePath: { eq: "carousel-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      c2: file(relativePath: { eq: "carousel-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      c3: file(relativePath: { eq: "carousel-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      c4: file(relativePath: { eq: "carousel-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      c5: file(relativePath: { eq: "carousel-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      c6: file(relativePath: { eq: "carousel-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      c7: file(relativePath: { eq: "carousel-7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      c8: file(relativePath: { eq: "carousel-8.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      c9: file(relativePath: { eq: "carousel-9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [data, setData] = useState({
    title: "Derslerde Kişiselleştirilmiş Planlama",
    content: `Pilates Matwork grup derslerimizle üyelerimize etkili, eğlenceli pilates dersleri sunuyoruz. Sizler için kurucu ortağımız Boncuk Bıçakçının özenle hazırladığı konsept pilates derslerimizi sunmaktan mutluluk duyuyoruz. Hepsi birbirinden farklı konsept grup derslerimizde katılmak istediğiniz dersleri kendiniz belirleyebilir, kişiselleştirilmiş bir grup ders içeriği oluşturabilirsiniz.
    Grup ders paketinizdeki derslerinizi yoga grup derslerinizde de kullabilirsiniz. Yoga eğitmenlerimiz haftada 5 gün, farklı yoga ekolleri ile sizlerle. Tek yapmanız gereken mobil uygulamamızı indirmek ve katılmak istediğiniz derslere sign-in yapmak.`,
    buttonText: "Mobil Uygulamaya Gözat",
    link: "#",
    images: [
      {
        key: "carousel_1",
        link: "#",
        image: images?.c1?.childImageSharp?.fluid,
        text: "Disq Pilates",
      },
      {
        key: "carousel_2",
        link: "#",
        image: images?.c2?.childImageSharp?.fluid,
        text: "Disq Cardio",
      },
      {
        key: "carousel_3",
        link: "#",
        image: images?.c3?.childImageSharp?.fluid,
        text: "be Tight Mat Pilates",
      },
      {
        key: "carousel_4",
        link: "#",
        image: images?.c4?.childImageSharp?.fluid,
        text: "be Fixed Mat Pilates",
      },
      {
        key: "carousel_5",
        link: "#",
        image: images?.c5?.childImageSharp?.fluid,
        text: "be Cheeky Mat Pilates",
      },
      {
        key: "carousel_6",
        link: "#",
        image: images?.c6?.childImageSharp?.fluid,
        text: "be Hot Mat Pilates",
      },
      {
        key: "carousel_7",
        link: "#",
        image: images?.c7?.childImageSharp?.fluid,
        text: "be Released Mat Pilates",
      },
      {
        key: "carousel_8",
        link: "#",
        image: images?.c8?.childImageSharp?.fluid,
        text: "be Lifted Mat Pilates",
      },
      {
        key: "carousel_9",
        link: "#",
        image: images?.c9?.childImageSharp?.fluid,
        text: "Vinyasa Yoga",
      },
    ],
  })

  const allImagesLoaded = !_.some(data.images, imageData => _.isEmpty(imageData.image));

  return (
    allImagesLoaded && (
      <section id="screenshots" className="section screenshots-area ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Title title={data.title} content={data.content} />
              {/* App Screenshot Slider Area */}
              <div className="app-screenshots">
                {/* Single Screenshot Item */}
                {_.map(data.images, item => {
                  return (
                    <div key={item.key} className="single-screenshot">
                      <Img fluid={item?.image} />
                      {/* Screenshots Overlay */}
                      <div className="screenshots-overlay">
                        <a href={item.link}>{item.text}</a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  )
}

export default Carousel
