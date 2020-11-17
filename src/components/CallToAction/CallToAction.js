import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const CallToAction = ({ data, id }) => {
  const { title, subtitle, actionUrl, actionText } = data
  return (
    <div id={id} className="callToAction__container">
      <h1>{title}</h1>
      <div className="callToAction__line" />
      <h2>{subtitle}</h2>
      <div className="mt-4 mt-lg-0">
        <Link to={actionUrl} className="btn btn-bordered-white">
          <span>{actionText}</span>
        </Link>
      </div>
    </div>
  )
}

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  actionUrl: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  id: PropTypes.string,
}

CallToAction.defaultProps = {
  subtitle: "",
  id: null,
}

export default CallToAction
