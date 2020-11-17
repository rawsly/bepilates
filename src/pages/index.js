import React from "react"

import Welcome from "../components/Welcome/Welcome"
import About from "../components/About/About"
import Questions from "../components/Questions/Questions"
import Subscribe from "../components/Subscribe/Subscribe"
import Download from "../components/Download/Download"
import DetailedForm from "../components/DetailedForm/DetailedForm"
import Features from "../components/Features/Features"
import Carousel from "../components/Carousel/Carousel"
import Map from "../components/Map/Map"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout title="Anasayfa">
      <Welcome />
      <Subscribe />
      <Features />
      <Download />
      <About />
      <DetailedForm fromUrl="/" />
      <Carousel />
      <Questions showBackground />
      {/* <BlogSection /> */}
      <Map />
    </Layout>
  )
}
export default IndexPage
