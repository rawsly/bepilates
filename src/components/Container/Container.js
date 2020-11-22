import React from 'react'

const Container = ({ children, ...rest }) => {
  return (
    <div className="container" {...rest}>
      {children}
    </div>
  )
}

export default Container
