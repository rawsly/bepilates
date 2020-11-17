import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const DividedHero = ({ fluid, imagePosition, title, subtitle }) => {
  const Image = () => (
    <div className="dividedHero__image">
      <Img fluid={fluid} />
    </div>
  )

  return (
    <div className="dividedHero__container">
      {imagePosition === "left" && <Image />}
      <div
        className="dividedHero__details"
        style={{
          alignItems: imagePosition === "left" ? "flex-start" : "flex-end",
          textAlign: imagePosition
        }}
      >
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {imagePosition === "right" && <Image />}
    </div>
  )
}

DividedHero.propTypes = {
  fluid: PropTypes.shape({}).isRequired,
  imagePosition: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

DividedHero.defaultProps = {
  imagePosition: "left",
}

export default DividedHero
