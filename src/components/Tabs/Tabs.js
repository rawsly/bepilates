import React, { useState } from "react"
import PropTypes from "prop-types"
import _ from "lodash"
import Img from "gatsby-image"
import Space from "../Space/Space"

const Tabs = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="Tabbed__container">
      <div className="Tabbed__tabContainer">
        {_.map(data, (tab, index) => (
          <div
            key={tab.id}
            role="button"
            onClick={() => setSelectedIndex(index)}
            className={[
              "Tabbed__tab",
              index === selectedIndex ? "selected" : "",
            ].join(" ")}
          >
            <i className={tab.icon} />
            <p>{tab.title}</p>
          </div>
        ))}
      </div>
      <Space height={30} />
      <div className="Tabbed__tabContent">
        <Img fixed={data[selectedIndex].image} className="Tabbed__tabImage" />
        <div className="Tabbed__tabDetails">
          <h2 className="Tabbed__tabContentTitle">
            {data[selectedIndex].content.title}
          </h2>
          <p>{data[selectedIndex].content.details}</p>
          <div className="Tabbed__line" />
          <div className="Tabbed__subContent">
            <p>{data[selectedIndex].content.subDetails}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Tabs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.string,
      image: PropTypes.shape({}),
      content: PropTypes.shape({
        title: PropTypes.string,
        details: PropTypes.string.isRequired,
        subDetails: PropTypes.string,
      }),
    })
  ).isRequired,
}

export default Tabs
