import React from "react"
import PropTypes from "prop-types"

import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import ScrollupSection from "../components/scrollupSection/scrollUp"
import SEO from '../components/seo';

import "./layout.css"

const Layout = ({ title, children, blogSeo, dark }) => {
  return (
    <main>
      <SEO title={blogSeo.title} description={blogSeo.description} />
      <div className="seoul">
        <ScrollupSection />
        <div className="all-area">
          <Header dark={dark} />
          {children}
          <Footer />
        </div>
      </div>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  blogSeo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  }),
  dark: PropTypes.bool,
}

Layout.defaultProps = {
  blogSeo: {},
  dark: false,
}

export default Layout
