import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import Event from "../components/Event";

const HomeScreen = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await axios.get("/api/events");
      setEvents(data);
    };
    fetchEvents();
  });

  return (
    <>
      <h1>Latest Events</h1>
      <Row>
        {events.map((e) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Event event={e} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
