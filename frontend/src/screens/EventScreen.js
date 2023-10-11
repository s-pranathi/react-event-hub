import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Row, Col, Image, Card, Button, ListGroup, Form } from "react-bootstrap";
import axios from "axios";

const EventScreen = () => {
  const params = useParams();
  const [qty, setQty] = useState(1)
  const [event, setEvent] = useState({});
  const navigate = useNavigate()


  useEffect(() => {
    const fetchEvent = async () => {
      const { data } = await axios.get(`/api/events/${params.id}`);
      setEvent(data);
    };
    fetchEvent();
  }, []);

  const addToCartHandler = () => {
     navigate(`/cart/${params.id}?qty=${qty}`)
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={event.image} alt={event.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{event.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Participants: {event.participant}</ListGroup.Item>
            <ListGroup.Item>Price: ${event.price}</ListGroup.Item>
            <ListGroup.Item>Description: {event.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${event.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{event.countInStock > 0 ? "Available" : "Sold out"}</Col>
                </Row>
              </ListGroup.Item>
              {event.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>Qty</Col>
                  <Col>
                    <Form.Control
                      as='select'
                      value={qty}
                      onChange={e => setQty(e.target.value)}>
                        {
                          [...Array(event.countInStock).keys()].map(x => (
                            <option key={x+1} value={x+1}>{x+1}</option>
                          ))
                        }
                      </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={event.countInStock === 0}
                  onClick={addToCartHandler}

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
