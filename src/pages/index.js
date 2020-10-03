import React from "react"

import ScrollupSection from "../components/scrollupSection/scrollUp"
import Header from "../components/Header/Header";
import Welcome from "../components/Welcome/Welcome";
import BrandingSection from "../components/brandingSection/branding"
import About from "../components/About/About"
import WorkSection from "../components/workSection/workOne"
import FeatureSection from "../components/featureSection/featureOne"
import ScreenshotSection from "../components/screenshotSection/screenshot"
import PricingSection from "../components/pricingSection/pricingOne"
import ReviewSection from "../components/reviewSection/reviewOne"
import TeamSection from "../components/teamSection/teamOne"
import Subscribe from "../components/Subscribe/Subscribe"
import Download from "../components/Download/Download"
import BlogSection from "../components/blogSection/blogOne"
import ContactSection from "../components/contactSection/contact"
import FooterSection from "../components/footerSection/footer"
import Features from "../components/Features/Features";

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
          <BrandingSection />
          <WorkSection />
          <FeatureSection />
          <ScreenshotSection />
          <PricingSection />
          <ReviewSection />
          <TeamSection />
          <BlogSection />
          <ContactSection />
          <FooterSection />
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
