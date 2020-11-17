import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash';

import Card from '../Card/Card';

const Cards = ({ cards, gridTemplateColumns }) => {
  return (
    <div className="cards__container" style={{ gridTemplateColumns }}>
      {_.map(cards, card => (
        <Card data={card} />
      ))}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.shape({}),
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    actionText: PropTypes.string,
    actionUrl: PropTypes.string,
  })).isRequired,
  gridTemplateColumns: PropTypes.string,
}

Cards.defaultProps = {
  gridTemplateColumns: 'repeat(2, 1fr)',
}

export default Cards
