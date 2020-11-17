import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import Container from '../components/Container/Container'
import Hero from '../components/Hero/Hero'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/Title/Title'
import Cards from '../components/Cards/Cards'
import CallToAction from '../components/CallToAction/CallToAction'
import Reviews from '../components/Reviews/Reviews'
import DetailedForm from '../components/DetailedForm/DetailedForm'

const PilatesPage = ({ data }) => {
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
    {
      title: 'Pilates derslerinde kişisel planlama',
      content: 'Pilates derslerinize ilişkin tüm detaylar avucunuzun içinde. Mobil uygulamamız ile pilates derslerinizi planlayın ve detayları görüntüleyin.',
      actionUrl: '/mobileapp',
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
        <SEO title="Pilates" />
        <Hero 
          title="Pilates ile eşsiz bir vücuda sahip olun"
          subtitle="Pilates egzersizleri ile sıkı, esnek, güçlü ve mükemmel bir vücuda sahip olun."
          actionText="Ücretsiz Deneyin"
          actionUrl="/#form"
          bgFluid={data?.bgImage?.childImageSharp?.fluid}
          bgColor="#fff"
        />
        <Title title="Hedeflerinize pilates ile ulaşın" content="Birçok farklı pilates ders seçeneği ile arzuladığınız vücuda oldukça yakınsınız. Eşsiz bir pilates deneyimi için buradayız." />
        <Cards cards={cards} />
      </Container>

      <Container>
        <Reviews data={reviews} />
      </Container>

      <CallToAction data={callToAction} />
      
      <Container>
        <DetailedForm fromUrl="/pilates" />
      </Container>
    </Layout>
  )
}

PilatesPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
}

export default PilatesPage


export const pageQuery = graphql`
  query {
    bgImage: file(relativePath: { eq: "pilates-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
