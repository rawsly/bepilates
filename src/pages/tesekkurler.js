import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

const Tesekkurler = ({ data }) => {
  return (
    <div className="inner-wrapper d-flex flex-column align-items-center justify-content-between p-4">
      <div className="thanks-area">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 mx-auto mb-5 pt-4">
              <Img fluid={data?.defaultImage?.childImageSharp?.fluid} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8 mx-auto text-center mb-5">
              <h2>Teşekkür ederiz!</h2>
              <p className="my-3">
                Bizimle iletişime geçtiğiniz için teşekkür ederiz. En yakın
                zamanda size geri dönüş yapacağız! Bu sırada sitemizi incelemeye
                devam edebilirsiniz.
              </p>
              <Link to="/" className="btn btn-primary">
                <span>Anasayfa</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tesekkurler

export const pageQuery = graphql`
  query {
    defaultImage: file(relativePath: { eq: "blog-default-image.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
