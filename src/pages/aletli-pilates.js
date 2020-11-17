import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Container from '../components/Container/Container'
import Hero from '../components/Hero/Hero'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/Title/Title'
import Cards from '../components/Cards/Cards'
import CallToAction from '../components/CallToAction/CallToAction'
import DetailedForm from '../components/DetailedForm/DetailedForm'

const AletliPilatesPage = ({ data }) => {
  const cards = [
    {
      title: 'Aletli Pilates ile kesin sonuçlar',
      content: 'Aletli pilates etkisini henüz keşfetmediysen doğru yerdesin. Özel aletli pilates dersleri ile hızla sıkılaşabilir ve istediğin vücuda sahip olabilrisin.',
      actionUrl: '/aletli-pilates',
      actionText: 'İncele',
    },
    {
      title: 'Farklı konseptlerde mat pilates',
      content: 'İçerik ve etki bakımında sizin için tasarladığımız konsept mat pilates derslerini henüz denemediyseniz acele edin. Problem hiç veremediğiniz fazla kilolarınız mı?',
      actionUrl: '/mat-pilates',
      actionText: 'İncele',
    },
    {
      title: 'Donanımlı pilates eğitmenleri',
      content: 'Pilatesin kesin sonuçlar sunabilmesi için başarılı pilates eğitmenleri gerekli. Eğitim ve sertifikasyonları tamam pilates eğitmenlerimizle tanışın.',
      actionUrl: '/ekip',
      actionText: 'İncele',
    },
  ];

  const callToAction = {
    title: 'Pilatesi şimdi ücretsiz dene ve pilates etkilerini keşfet',
    subtitle: 'Tüm Pilates derslerini ücretsiz deneyebilirsin. Pilatesi daha önce denemiş olabilirsin ama biz yine be.pilates&yoga ayrıcalığıyla pilatesi denemeni isteriz.',
    actionUrl: '/#form',
    actionText: 'Deneme Dersi Al'
  }

  const reviews = [
    {
      id: "review_1",
      name: "Öznur Kaya",
      text: "Her konuda mukkemmel hissettiren bir yer. Hocalarin profesyonelligi, nezaket ve guleryuz, temiz, ferah, uygulama uzerinden istediğiniz hocadan istediginiz saate randevu alabiliyorsunuz, konumu guzel, fiyat olarak da gayet uygun. Herkese tavsiye ederim. Senem hoca ve Emine hoca ile çalıştım her ikisini de tavsiye ederim. Ozge hanım da size her konuda yardimci olabilecek harika bir insan. Dort dörtlük bir salon."
    },
    {
      id: 'review_2',
      name: 'Begüm Vardar',
      text: 'Pilatesle ilk tanıştığım yer! Yıllardır da başka hiçbir yere ihtiyaç duymadım. son derece profesyonel işini bilen pozitif insanlarla ders yapmak çok keyifli. İşini seven bir sürü tatlı insan bi arada tabi ki bu durum bize de fazlasıyla yansıyor. Buraya ayaklar geri geri değil koşa koşa geliyor? 💗',
    },
    {
      id: 'review_3',
      name: 'Ecem Eldeniz',
      text: 'Her gidişimde hem pilates yapıyorum hem de yepyeni bilgiler öğreniyorum, iyi ki sizi tercih etmişim, süpersiniz 😊',
    },
    {
      id: 'review_4',
      name: 'Merve Saraç',
      text: 'Herkes inanılmaz güleryüzlü. 😊'
    }
  ]

  return (
    <Layout dark>
      <Container>
        <SEO title="Aletli Pilates" />
        <Hero 
          title="Aletli Pilates etkisini keşfedin"
          subtitle="Aletli pilates ile hızla sıkılaşabilir, fazlalıklarınızdan kurtulabilir hatta duruş bozukluklarınızı düzeltebilirsiniz."
          actionText="Keşfet"
          actionUrl="/#turler"
          bgFluid={data?.bgImage?.childImageSharp?.fluid}
          bgColor="#fff"
        />
        <Title title="Tüm soruların cevabı aletli pilateste" content="Aletli pilates özel dersleri ile birebir eğitmen eşliğinde hedeflerinize en hızlı şekilde ulaşın." />
        <Cards cards={cards} gridTemplateColumns="repeat(3, 1fr)" />
        <div className="promotion__container">
          <Img fluid={data?.promotionBg?.childImageSharp?.fluid} style={{ flex: 1 }} />
          <div className="promotion__details">
            <h1>Aletli Pilatesi Deneyimleyin</h1>
            <p>En iyi ekipmanlar ve donanımlı eğitmenlerle sunduğumuz aletli pilates derslerini ücretsiz deneyimleyin. Daha ilk dersten diğer bütün egzersiz sistemlerinden farkını anlayacaksınız.</p>
            <p>Aletli pilatesi deneyimlemeniz için ücretsiz deneme dersi sunuyoruz. Geç kalmadan <Link to="#CTA">deneyin.</Link></p>
          </div>
        </div>
      </Container>

      <CallToAction id="CTA" data={callToAction} />
      
      <Container>
        <DetailedForm fromUrl="/aletli-pilates" />
      </Container>
    </Layout>
  )
}

AletliPilatesPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
}

export default AletliPilatesPage


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
  }
`
