import React from "react"
import PropTypes from "prop-types"

const Space = ({ height }) => {
  return <div style={{ height, width: "100%" }} />
}

Space.propTypes = {
  height: PropTypes.number.isRequired,
}

export default Space
