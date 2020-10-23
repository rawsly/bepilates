import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image';

const BlogTopImage = ({ fluid, imageUrl }, ...rest) => {
  return (
    <div className="blog-top-image-container" {...rest}>
      <h1 className="blog-top-title">Blog</h1>
      {imageUrl ? (
        <img src={imageUrl} />
      ) : (
        <Img fluid={fluid} fadeIn />
      )}
    </div>
  )
}

BlogTopImage.propTypes = {
  fluid: PropTypes.shape({}),
  imageUrl: PropTypes.string,
}

export default BlogTopImage
