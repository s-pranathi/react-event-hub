import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listEvents } from "../actions/eventActions";
import { Col, Row } from "react-bootstrap";
import Event from "../components/Event";
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {

  const dispatch = useDispatch()
  const eventList = useSelector((state) => state.eventList)
  const {loading, events, error} = eventList

  useEffect(() => {
    dispatch(listEvents())
  }, [dispatch]);

  return (
    <>
      <h1>Latest Events</h1>
      {
        loading ? (<Loader/>) : error ? (<Message variant='danger'>{error}</Message>) : (<Row>
          {events.map((e) => (
            <Col key={e._id} sm={12} md={6} lg={4} xl={3}>
              <Event event={e} />
            </Col>
          ))
          }
        </Row>)
      }
      
    </>
  );
};

export default HomeScreen;
