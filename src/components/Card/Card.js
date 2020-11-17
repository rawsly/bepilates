import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Card = ({ data }) => {
  const { image, title, content, actionText, actionUrl } = data
  return (
    <div className="card__container">
      <div className="card__details">
        {image && <Img fluid={image} />}
        <p className="card__title">{title}</p>
        <p className="card__content">{content}</p>
      </div>
      {actionText && actionUrl && (
        <div className="card__button mt-4 mt-lg-0">
          <Link to={actionUrl} className="btn btn-bordered">
            <span>{actionText}</span>
          </Link>
        </div>
      )}
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.shape({}),
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    actionText: PropTypes.string,
    actionUrl: PropTypes.string,
  }).isRequired,
}

export default Card
