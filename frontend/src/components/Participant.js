import React from 'react'
import PropTypes from 'prop-types'

const Participant = ({value, text, color}) => {
  return (
    <div className='participant'>
      <span>
        <i style={{color}}
          className={
            value >= 1
              ? 'fa-solid fa-person'
              : value >= 18
          }></i>
      </span>
      <span>
        <i style={{color}}
          className={
            value >= 20
              ? 'fa-solid fa-person'
              : value >= 10
          }></i>
      </span>
      <span>
        <i style={{color}}
          className={
            value >= 30
              ? 'fa-solid fa-person'
              : value >= 25
          }></i>
      </span>
      <span>
        <i style={{color}}
          className={
            value >= 40
              ? 'fa-solid fa-person'
              : value >= 35
          }></i>
      </span>
      <span>
        <i style={{color}}
          className={
            value >= 50
              ? 'fa-solid fa-person'
              : value >= 45
          }></i>
      </span> 
      <span>{text}</span>
    </div>
  )
}

Participant.defaultProps = {
  color: '#f8e825'
}

Participant.propTypes = {
  value: PropTypes.number,
  text: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Participant