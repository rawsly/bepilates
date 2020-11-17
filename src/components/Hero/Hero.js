import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Container from "../Container/Container"

const Hero = ({ title, subtitle, actionText, actionUrl, bgFluid, bgColor }) => {
  return (
  <div className="hero__container" style={{ backgroundColor: bgColor }}>
    <div className="hero__shadow" />
    <div className="hero__contentContainer">
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <div className="hero__button mt-4 mt-lg-0">
        <Link to={actionUrl} className="btn btn-bordered">
          <span>{actionText}</span>
        </Link>
      </div>
    </div>
    <Img fluid={bgFluid} style={{ flex: 1 }} />
  </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  actionText: PropTypes.string,
  actionUrl: PropTypes.string,
  bgFluid: PropTypes.shape({}).isRequired,
  bgColor: PropTypes.string,
}

Hero.defaultProps = {
  subtitle: "",
  actionText: "",
  actionUrl: "",
  bgColor: "#fff",
}

export default Hero
