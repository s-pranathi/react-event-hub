import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../actions/orderActions";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { ORDER_DETAILS_RESET } from "../constants/orderConstants";

const MyOrdersScreen = () => {
//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

  const orders = useSelector((state) => state.orders);
  const orders_list = orders.order;

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: ORDER_DETAILS_RESET})
    if (!user.name) {
      dispatch(getOrders());
    }
  }, [dispatch, user]);

  return (
    <Row>
      <Col md={9}>
        <h2>My Orders</h2>
        {orders_list && (
          <ListGroup variant="flush">
            {orders_list.map((o) => (
              <Link key={o._id} to={`/order/${o._id}`}>
                <ListGroup.Item>{o._id}</ListGroup.Item>
              </Link>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
};

export default MyOrdersScreen;
