import React, { Component } from "react"
import _ from "lodash"
import PropTypes from "prop-types"

const Reviews = ({ data }) => {
  return (
    <section className="section testimonial-area bg-gray ptb_100">
      <div className="container text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-8">
            <div className="testimonials owl-carousel">
              {/* Single Testimonial */}
              {_.map(data, item => {
                return (
                  <div key={item.id} className="single-testimonial p-3 p-md-5">
                    <h3 className="client-name mt-4 mb-2">{item.name}</h3>
                    <div className="client-description">
                      <div className="client-text">
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            {/* Single Testimonial Thumb */}
            <div className="single-testimonial-thumb d-none d-md-block">
              {/* Thumb Prev */}
              <div className="thumb-prev">
              <i className="icofont-thin-left" />

              </div>
              {/* Thumb Next */}
              <div className="thumb-next">
                <i className="icofont-thin-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Reviews.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Reviews
