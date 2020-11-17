import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Container from "../components/Container/Container"
import Hero from "../components/Hero/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/Title/Title"
import Cards from "../components/Cards/Cards"
import CallToAction from "../components/CallToAction/CallToAction"
import DetailedForm from "../components/DetailedForm/DetailedForm"
import DividedHero from "../components/DividedHero/DividedHero"

const HamilePilatesiPage = ({ data }) => {
  const cards = [
    {
      image: data?.card1?.childImageSharp?.fluid,
      title: "Rahat ve ağrısız hamilelik",
      content:
        "Hamilelik döneminde taşıdığınız ağırlık ve doğrudan vücudunuzun ağırlık merkezi her gün değişir. Bu değişim duruşta(postürde) bozulmalara, bedende deformasyona ve ağrılara sebep olabilir.",
    },
    {
      image: data?.card2?.childImageSharp?.fluid,
      title: "Normal Doğum",
      content:
        "Hamile Pilatesi çalışmaları ile karın kasları, sırt kasları, pelvis kaslarını güçlenir ve bedendeki deformasyon minimuma iner. Pilates hareketleri ile uyguladıklarınız normal doğumu destekler.",
    },
    {
      image: data?.card3?.childImageSharp?.fluid,
      title: "Formunuza hızla kavuşun",
      content:
        "Hamilelik döneminde yapmış olduğuz pilates çalışmaları doğum sonrasında da hamilelik sürecinin etkilerini atmanıza yardımcı olur. Hamileliğinizin sonrasında hızla forma kavuşursunuz.",
    },
  ]

  const callToAction = {
    title: "Yerinizi ayırın",
    subtitle:
      "Hamilelikte pilates deneyimi için geç kalmayın. Ücretsiz deneme dersi ile hamile pilatesi dersini deneyimleyin.",
    actionUrl: "/#form",
    actionText: "Deneme Dersi Al",
  }

  const Promotion = () => (
    <div className="hamilePilatesi__promotion">
      <div className="hamilePilatesi__label">Ücretsiz</div>
      <p className="hamilePilatesi__content">
        Birçok üyemiz sağlıklı bir hamile pilatesi ile sağlıklı bir hamilelik
        dönemi geçirdi. Geç kalmadan hamile pilatesi için{" "}
        <Link to="/#form">ücretsiz deneme dersi al!</Link>
      </p>
    </div>
  );

  return (
    <Layout dark>
      <SEO title="Aletli Pilates" />
      <div className="hamilePilatesi__dividedContainer">
        <DividedHero
          title="Hamile Pilatesi ile rahat bir hamilelik dönemi"
          subtitle="Hamile pilatesi hamilelik döneminin olumsuz etkilerini azaltır, rahat ve sağlıklı bir doğum yapmanızı sağlar."
          fluid={data?.divided1?.childImageSharp?.fluid}
          imagePosition="right"
        />
      </div>
      <div className="hamilePilates__dividedContainer">
        <DividedHero
          title="Hamile pilatesi ne zaman yapılır?"
          subtitle="Hamilelik döneminin 13. haftasından itibaren doktorunuzdan onay alarak hamile pilatesi derslerine başlayabilirsiniz."
          fluid={data?.divided2?.childImageSharp?.fluid}
          imagePosition="left"
        />
      </div>
      <Container>
        <Promotion />
        <div className="hamilePilates__line" />
        <Title
          title="Neden hamile pilatesi yapmalıyım?"
          content="Hamile pilatesi yapmanızın birçok sebebi olabilir. Günümüzde doktorlar tarafından sıklıkla tavsiye edilen hamile pilatesini bir çok üyemiz ağrısız hamilelik dönemi, normal doğumu desteklemesi ve hızlı forma kavuşmak için hamile pilatesini tercih ediyor."
        />
        <Cards cards={cards} gridTemplateColumns="repeat(3, 1fr)" />
      </Container>

      <CallToAction id="CTA" data={callToAction} />

      <Container>
        <DetailedForm id="form" fromUrl="/aletli-pilates" />
      </Container>
    </Layout>
  )
}

HamilePilatesiPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
}

export default HamilePilatesiPage

export const pageQuery = graphql`
  query {
    bgImage: file(relativePath: { eq: "aletli-pilates-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    promotionBg: file(relativePath: { eq: "promotion-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    divided1: file(relativePath: { eq: "hamile-pilatesi-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    divided2: file(relativePath: { eq: "hamile-pilatesi-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    card1: file(relativePath: { eq: "hamile-pilatesi-card-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    card2: file(relativePath: { eq: "hamile-pilatesi-card-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    card3: file(relativePath: { eq: "hamile-pilatesi-card-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
