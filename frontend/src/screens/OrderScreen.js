import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  getOrderDetails,
  getPaypalKey,
  payOrder,
} from "../actions/orderActions";
import { clearCart } from "../actions/cartActions";
import { ORDER_PAY_RESET } from "../constants/orderConstants";

const OrderScreen = () => {
  const params = useParams();
  const orderId = params.id;

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  let updatedOrder = {};
  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay, paypalkey } = orderPay;

  useEffect(() => {
    dispatch(getPaypalKey());

    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
      dispatch(clearCart());
    }
  }, [dispatch, orderId, successPay, order]);

  if (!loading && order) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    updatedOrder.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : order ? (
    <>
      <Link className="btn btn-light my-3" to="/my-orders">
        Go to list of orders
      </Link>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success">Paid on {order.paidAt}</Message>
              ) : (
                <Message variant="danger">Not Paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${updatedOrder.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {!order.isPaid && (
                <ListGroup.Item>
                  {loadingPay && <Loader />}
                  <PayPalScriptProvider
                    options={{
                      "client-id": paypalkey,
                      components: "buttons",
                      currency: "USD",
                    }}
                  >
                    <PayPalButtons
                      style={{ layout: "horizontal" }}
                      createOrder={(data, actions) => {
                        return actions.order
                          .create({
                            purchase_units: [
                              {
                                amount: {
                                  currency_code: "USD",
                                  value: order.totalPrice,
                                },
                              },
                            ],
                          })
                          .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                          });
                      }}
                      onApprove={function (data, actions) {
                        return actions.order.capture().then(function () {
                          // Your code here after capture the order
                          var paymentResult = {
                            id: data.paymentID,
                            status: "Paid",
                            update_time: new Date().getDate().toString(),
                            email_address: order.user.email,
                          };
                          dispatch(payOrder(orderId, paymentResult));
                        });
                      }}
                    />
                  </PayPalScriptProvider>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  ) : (
    <Loader />
  );
};

export default OrderScreen;
