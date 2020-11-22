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
import Space from "../components/Space/Space"
import Tabs from "../components/Tabs"

const MedikalPilatesPage = ({ data }) => {
  const tabs = [
    {
      id: "tab_0",
      title: "Sırt ve Boyun Ağrılarının Önlenmesi",
      image: data?.tabImage1?.childImageSharp?.fixed,
      icon: "",
      content: {
        title: "Medikal pilates ile ağrılarınızdan kurtulun",
        details:
          "Pilates hareketleri omurga sağlığını doğrudan hedef alan egzersizler olduğu için omurgayı çevreleyen ve koruyan kaslarınız güçlenecek, ağrılarınızdan kurtulacaksınız.",
        subDetails:
          "Özel reformer pilates dersleri le alacağınız medikal pilates derslerinde tamamen hedefleriniz doğrultusunda çalıştırılırsınız.",
      },
    },
    {
      id: "tab_1",
      title: "Duruş Bozukluklarının Tedavisi",
      image: data?.tabImage2?.childImageSharp?.fixed,
      icon: "",
      content: {
        title: "Medial Pilates ile normal posture ulaşın",
        details:
          "Çağımızın en yaygın problemlerinden biri olan duruş bozukluğunu medikal pilates ile önleyebiliyoruz. Ücretsiz deneme dersi ile postur analizinizi yapıp duruş bozukluğunuz için özel medikal pilates dersleriyle çalışma yapabiliriz.",
        subDetails:
          "Tüm derslerde postürünüz ve gelişiminiz sürekli takip edilir.",
      },
    },
    {
      id: "tab_2",
      title: "İleri Seviye Eklem ve Omurga Problemleri",
      image: data?.tabImage3?.childImageSharp?.fixed,
      icon: "",
      content: {
        title: "Omurga rahatsızlıklarınız için medikal pilates",
        details:
          "Sırt ağrılarınız ve omurga rahatsızlığınız duruş bozuklukları yada akut ağrılarla sınırlı kalmayabilir. Omurga fıtıklarınız, iltihaplı romatizmalarınız için de medikal pilates ile çözüm üretebiliriz.",
        subDetails:
          "Studyomuzda birçok anklilozan spondilit gibi ileri seviye rahatsızlığı bulunan üyemiz medikal pilates dersleri ile konforlu yaşama döndü.",
      },
    },
  ]

  const callToAction = {
    title: 'Medikal pilates için ücretsiz deneme dersi alın',
    actionUrl: '/#form',
    actionText: 'Deneme Dersi Al'
  }

  return (
    <Layout dark>
      <SEO title="Medikal Pilates" />
      <Container>
        <Hero
          title="Medikal pilates ile sağlığınıza kavuşun"
          subtitle="Sırt ağrılarınız, duruş bozukluklarınız yada sağlık problemleriniz için çözüm medikal pilates."
          actionText="Ücretsiz Deneyin"
          actionUrl="/#form"
          bgFluid={data?.bgImage?.childImageSharp?.fluid}
          bgColor="#fff"
        />
      </Container>
      <Space height={50} />

      <Space height={50} />
      <Title
        title="Doktorlar sağlığınız için medikal pilates öneriyor"
        content="Sırt ve boyun ağrılarınızdan çok çekiyorsunuz, duruş probleminiz var yada omurga fıtıklarınız. Hatta ileri seviye omurga problemi. Hepsinin çözümü medikal pilates."
      />
      <Space height={50} />

      <Space height={50} />
      <Tabs data={tabs} />
      <Space height={50} />

      <Space height={50} />
      <CallToAction id="CTA" data={callToAction} />
      <Space height={50} />

      <Container>
        <DetailedForm id="form" fromUrl="/medikal-pilates" />
      </Container>
    </Layout>
  )
}

MedikalPilatesPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
}

export default MedikalPilatesPage

export const pageQuery = graphql`
  query {
    bgImage: file(relativePath: { eq: "medikal-pilates-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    tabImage1: file(relativePath: { eq: "tab-1.jpg" }) {
      childImageSharp {
        fixed(height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    
    tabImage2: file(relativePath: { eq: "tab-2.jpg" }) {
      childImageSharp {
        fixed(height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    tabImage3: file(relativePath: { eq: "tab-3.jpg" }) {
      childImageSharp {
        fixed(height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
