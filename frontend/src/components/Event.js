import React from 'react'
import { Card } from 'react-bootstrap'
import Participant from './Participant'
import { Link } from 'react-router-dom'

const Event = ({event}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/event/${event._id}`}>
        <Card.Img src={event.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/event/${event._id}`}>
          <Card.Title as='div'>
            <strong>{event.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
        <Participant value={event.participant} />
        </Card.Text>
        <Card.Text as='div'>
        {`${event.countInStock} Tickets Left`}    
            </Card.Text>
        <Card.Text as='h3'>
          ${event.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Event