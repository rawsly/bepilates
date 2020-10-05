import React from "react"

import ScrollupSection from "../components/scrollupSection/scrollUp"
import Header from "../components/Header/Header";
import Welcome from "../components/Welcome/Welcome";
import About from "../components/About/About"
import Questions from "../components/Questions/Questions"
import Subscribe from "../components/Subscribe/Subscribe"
import Download from "../components/Download/Download"
import DetailedForm from "../components/DetailedForm/DetailedForm"
import FooterSection from "../components/footerSection/footer"
import Features from "../components/Features/Features";
import Carousel from "../components/Carousel/Carousel";

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Anasayfa" />
      <div className="seoul">
        <ScrollupSection />
        <div className="all-area">
          <Header imageData={"../img/logo-white.png"} />
          <Welcome />
          <Subscribe />
          <Features />
          <Download />
          <About />
          <DetailedForm />
          <Carousel />
          <Questions />
          {/*TODO: Map Section*/}
          {/* <BlogSection /> */}
          <FooterSection />
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
