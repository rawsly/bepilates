import React from "react"

const Title = ({ title, content }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-6">
        <div className="section-heading text-center">
          <h2 className="text-capitalize">{title}</h2>
        </div>
      </div>
      <div className="col-12 col-md-12 col-lg-12">
        {content && <p className="d-none d-sm-block mt-4 ta-center">{content}</p>}
      </div>
    </div>
  )
}

export default Title
