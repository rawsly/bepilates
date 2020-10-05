import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const Questions = () => {
  const images = useStaticQuery(graphql`
    query {
      i1: file(relativePath: { eq: "app-bg.png" }) {
        childImageSharp {
          fixed(width: 242, height: 440) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      i2: file(relativePath: { eq: "app-bg.png" }) {
        childImageSharp {
          fixed(width: 242, height: 440) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      i3: file(relativePath: { eq: "app-bg.png" }) {
        childImageSharp {
          fixed(width: 242, height: 440) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      i4: file(relativePath: { eq: "app-bg.png" }) {
        childImageSharp {
          fixed(width: 242, height: 440) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bgImg: file(relativePath: { eq: "mobile-phone-slider.png" }) {
        childImageSharp {
          fluid(maxWidth: 293, maxHeight: 590) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [data, setData] = useState([
    {
      title: "Üyelik ücreti var mı?",
      content:
        "Hayır, be. pilates&yoga da üyelik ücreti yok. Bahçeşehir pilates ve yoga studyomuzda uzun süreli kontrat ya da sözleşme de yok. Sadece aletli pilates özel ders, mat pilatesi grup dersi, yoga grup ve özel ders paketi satın alırsınız.",
      image: images?.i1?.childImageSharp?.fixed,
    },
    {
      title: "Derslerime başkaları katılacak mı?",
      content:
        "Hayır. Ders saatiniz sizin için planlanır ve başkaları sizin dersinize katılmaz. Üyelerimizin gelişimi için onlara özel bir atmosfer sunmaktan mutluluk duyuyoruz. Bu çalışma sistemi ile ders kalitesini maksimize etmek bizim en temel prensibimiz.",
      image: images?.i2?.childImageSharp?.fixed,
    },
    {
      title: "Arkadaşıma tavsiye edersem indirim alır mıyım?",
      content:
        "Evet, arkadaşlarınıza tavsiye ettiğinizde indirim kazanırsınız. Sizin tavsiyeniz ile ders paketi alan yeni üyeler size 1 ders saati kazandırırlar. Bahçeşehir Pilates merkezimize arkadaşlarınızı davet edebilir, bu deneyimi paylaşabilirsiniz. Maksat dostlar kazansın.",
      image: images?.i3?.childImageSharp?.fixed,
    },
    {
      title: "Dersler hangi saatlerde işlenecek?",
      content:
        "Ders planlanması sizin talepleriniz doğrultusunda yapılır. Talep ettiğiniz saatlerde eğitmen ve studyo durumu müsaitse derhal planlama yapılır. Genellikle haftada 2 saatlik planlama üyelerimiz için yeterli olmaktadır.",
      image: images?.i4?.childImageSharp?.fixed,
    },
  ])

  const wrapperBgImg = images?.bgImg?.childImageSharp?.fluid

  return (
    <section className="section work-area ptb_100">
      {/* Work Slider Wrapper */}
      <div className="work-wrapper d-none d-md-block">
        <BackgroundImage
          className="work-slider-wrapper"
          fluid={wrapperBgImg}
          backgroundColor={"rgba(0,0,0,0)"}
          backgroundRepeat="no-repeat"
          backgroundPosition="top center"
          backgroundAttachment="scroll"
          backgroundSize="100%"
          style={{
            height: '590px'
          }}
        >
          <ul className="work-slider owl-carousel">
            {_.map(data, item => {
              return (
                <li key={item.key} className="slide-item">
                  <Img fixed={item.image} style={{ width: '242px', height: '440px' }} />
                </li>
              )
            })}
          </ul>
        </BackgroundImage>
      </div>
      <div className="container">
        <div
          className="row justify-content-end justify-content-lg-between work-content"
          id="work-slider-pager"
        >
          {_.map(data, item => {
            return (
              <div key={`${item.key}_`} className="col-12 col-sm-6">
                <a href="#" className="paper-item">
                  {/* Single Work */}
                  <div className="single-work d-inline-block text-center p-4">
                    <h3 className="mb-2">{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Questions
