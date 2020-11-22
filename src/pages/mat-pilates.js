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

const MatPilatesPage = ({ data }) => {
  const callToAction = {
    title: "Medikal pilates için ücretsiz deneme dersi alın",
    actionUrl: "/#form",
    actionText: "Deneme Dersi Al",
  }

  const formContent = `Mat pilates, pilates egzersizlerinin reformer pilates aleti olmadan basit pilates ekipmanları ile yerde uygulanmasıdır. Pilates felsefesine amaç ve genel pilates prensiplerine bağlı kalınarak uygulanan mat pilates egzersizleri vücudunuza esneklik, sıkılaşma ve kaslarınıza güç kazandıracaktır.

  Bahçeşehir pilates studyoları arasında hizmet kalitesi ve başarı grafiğiyle öne çıkan pilates studyomuzda, Mat pilates grup derslerinde yenilikçi sistemimizi sunmaktan mutluluk duyuyoruz. Sizin için titizlikle tasarladığmız pilates matwork grup derslerimizle etkili, eğlenceli pilates dersleri deneyimleyeceğinizden eminiz. Sizin için titizlikle tasarladık.
  
  Geç kalmadan sizde kendiniz için konsept mat pilates derslerimizden ücretsiz deneme dersi alın.`

  return (
    <Layout dark>
      <SEO title="Medikal Pilates" />
      <Container>
        <Hero
          title="Mat Pilates Derslerinde kişiselleştirilmiş program."
          subtitle="Hiç bir yerde bulamazsanız. 6 farklı konseptte grup derslerinden istediğini seç, mobil uygulamamız üzerinden derse check-in yap. Dersin keyfini sür."
          actionText="Ücretsiz Deneyin"
          actionUrl="/#form"
          bgFluid={data?.bgImage?.childImageSharp?.fluid}
          bgColor="#fff"
        />
      </Container>
      <Space height={50} />

      <Space height={50} />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title
          title="Mat Pilatesi Grup dersleri burada çok farklı."
          content="Konsept mat pilates dersleri ile istediğin vücuda hızlı, basit ve etkili bir şekilde kavuşabilirsin. Pilates alanındaki tecrübelerimiz, değerli üyelerimizin talepleri doğrultusunda, Mat pilates grup dersleri için 6 farklı konseptte dersler planladık. Konsept mat pilates grupları ile eğlenceli deneyimler edinebilir, esnek, sıkı ve güçlü bir vücuda sahip olabilirsin.

        Pilates derslerini tercih etmenin sebebi zayıflamak, sıkılaşmak, bölgesel incelme yada omurga sağlığı olabilir. Her amaç için farklı konseptlerde dersler hazırladık. Aylık üyelik sistemi olmadan grup dersleri için ders paketleri alıp, Hedeflerin ve taleplerin doğrultusunda mobil uygulamamız üzerinden sadece katıldığın gurp derslerine check-in yap!"
        />
        <Space height={30} />
        <Link to="/#form" className="btn btn-bordered MatPilates__center">
          <span>Derslere Gözat</span>
        </Link>
      </Container>
      <Space height={50} />

      <Space height={50} />
      <CallToAction id="CTA" data={callToAction} />
      <Space height={50} />

      <Space height={50} />
      <Container>
        <Space height={50} />
        <Title
          title="Mat pilates grup derslerinde yerinizi ayırtın!"
          content="Mat Pilates egzersizleri fiziksel yapını düzeltirken kas sistemine bütünsel dayanıklılık ve iskelet sistemine sürdürülebilir direnç ve esneklik kazandırır. be. pilates&yoga da deneyimli, eğitimli, uzman eğitmen kadromuzla mat pilatesi bilimsel ve sanatsal perspektifle sunuyoruz. Bu deneyimi keşfetmek için geç kalma!

          Konsept derslerin açıklamaları için aşağıdaki resimleri tıklayabilir, yada takvimde yer alan mat pilates grup derslerinin saatlerine ulaşabilirsin."
        />
      </Container>
      <Space height={50} />

      <Container>
        <DetailedForm
          id="form"
          fromUrl="/medikal-pilates"
          content={formContent}
        />
      </Container>
    </Layout>
  )
}

MatPilatesPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
}

export default MatPilatesPage

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
        fixed(height: 450) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    tabImage2: file(relativePath: { eq: "tab-2.jpg" }) {
      childImageSharp {
        fixed(height: 450) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    tabImage3: file(relativePath: { eq: "tab-3.jpg" }) {
      childImageSharp {
        fixed(height: 450) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
