import React, { useState } from "react"
import _ from "lodash"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Features = () => {
  const images = useStaticQuery(graphql`
    query {
      first: file(relativePath: { eq: "feature-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      second: file(relativePath: { eq: "feature-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      third: file(relativePath: { eq: "feature-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [features, setFeatures] = useState([
    {
      key: "feature_reformer-pilates",
      image: images?.first?.childImageSharp?.fluid,
      title: "Reformer Pilates",
      content: "Pilates, Joseph Pilates tarafından kasları güçlendirmek, esnekliği arttırmak ve vücudun genel sağlığını iyileştirmek amacıyla geliştirilmiş bir egzersiz sistemidir. Pilates sistemi vücudun tüm kaslarını çalıştırmaya yönelik farklı aktivitelere uygun egzersizler içerir. Reformer pilates egzersiz sistemi ile vücudunuzun sınırlarını yeniden keşfedin.",
      buttonText: "Ücretsiz Dene",
      link: "#",
    },
    {
      key: "feature_mat-pilates",
      image: images?.second?.childImageSharp?.fluid,
      title: "Mat Pilates",
      content: "Mat Pilates, Pilates egzersizlerini etkili ve basit bir şekilde uygulayabileceğiniz pilates egzersiz sistemidir. Mat pilates sistemi kaslarınızın kendi direnciyle güçlenirken esnemesini sağlayan pilates sistemidir. Mat Pilates çalışmaları kas sisteminize bütünsel dayanıklılık sağlarken, iskelet sisteminize sürdürülebilir direnç ve esneklik kazandırır.",
      buttonText: "Ücretsiz Dene",
      link: "#",
    },
    {
      key: "feature_yoga",
      image: images?.third?.childImageSharp?.fluid,
      title: "Yoga",
      content: "Yoga, Hindistan temelli bir disiplin olup akıl, beden ve ruh bütünleşmesini esas alır. Yapacağınız yoga seansları ile esnek bir bedene ve dinlenmiş bir zihne sahip olacaksınız. Yoga duruşları ile farkındalık içerisinde sempatik sinir siteminizi gevşeteceksiniz. Yoga asanaları dinç, esnek, güçlü bir omurgaya kavuşmanızı ve stresten arınmanızı sağlayacak.",
      buttonText: "Ücretsiz Dene",
      link: "#",
    },
  ])

  return (
    <section id="benifits" className="section benifits-area ptb_100">
      <div className="container">
        <div className="row">
          {/* Benifits Item */}
          {_.map(features, feature => {
            return (
              <div
                key={feature.key}
                className="col-12 col-sm-12 col-md-4 col-lg-4"
              >
                <div className="benifits-item text-center p-3">
                  <div className="feature-icon feature-image">
                    <Img fluid={feature.image} />
                  </div>
                  {/* Benifits Text */}
                  <div className="benifits-text">
                    <h3 className="mb-2">
                      <a href={feature.link}>
                        {feature.title}
                      </a>
                    </h3>
                    <p>{feature.content}</p>
                    <a href={feature.link} className="btn btn-bordered">
                      <span>{feature.buttonText}</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
