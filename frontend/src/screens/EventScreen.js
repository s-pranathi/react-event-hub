import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, Card, Button, ListGroup } from "react-bootstrap";
import events from "../events";
import './EventScreen.css'

const EventScreen = () => {
  const params = useParams();
  const event = events.filter((event) => event._id === params.id);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6} className='eventImage'>
          <Image src={event[0].image} alt={event[0].name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{event[0].name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Participants: {event[0].participants}
            </ListGroup.Item>
            <ListGroup.Item>Price: ${event[0].price}</ListGroup.Item>
            <ListGroup.Item>Description: {event[0].description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${event[0].price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {event[0].countInStock > 0 ? "Available" : "Sold out"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={event[0].countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default EventScreen;
