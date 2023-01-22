import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const OrderList = ({
  orders,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!orders.length) {
    return <h3>No Orders Yet</h3>;
  }

  const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log('cancel clicked')
      try {
        let vble = ''
          // const { data } = await addClient({
          //     variables: {
          //         name: nameText,
          //         address: addressText,
          //         town: townText,
          //     },
          // });
      } catch (err) {
          console.error(err);
      }
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        {showTitle && <h3>{title}</h3>}
        {orders &&
          orders.map((order) => (
            <div key={order._id} className="card mb-3">
              <h4 className="card-header bg-primary text-light p-2 m-0">
                {showUsername ? (
                  <Link
                    className="text-light"
                    to={`/`}
                    // to={`/profiles/${order.orderAuthor}`}
                  >
                    Week {order.plannedWeekOfYearNumber}: {order.plannedDayOfWeek} {order.month} {order.plannedDayOfMonthNumber}<br />
                  </Link>
                ) : (
                  <>
                    <span style={{ fontSize: '1rem' }}>
                      You had this order on {order.createdAt}
                    </span>
                  </>
                )}
              </h4>
              <div  style={{ fontSize: '1rem' }}>
                  <span style={{ fontWeight: 'bold'}}>Meal:</span> <span>{order.todaysMeal}</span>
                  <br/>
                  <span style={{ fontWeight: 'bold'}}>quantity:</span> <span>{order.quantity}</span>
              </div>
              <div className="card-body bg-light p-2">
                <p>{order.orderText}</p>
              </div>
              <Row>
                <Col>
                  <Link
                    className="btn btn-primary btn-block btn-squared"
                    to={`/`}
                    // to={`/orders/${order._id}`}
                  >
                    Home
                  </Link>
                </Col>
                <Col>
                  <Button id="cancelOrder" type="submit" className="btn btn-danger btn-block btn-squared">
                    Cancel this order
                  </Button>
                </Col>
              </Row>
            </div>
          ))}
        </Form>
    </div>
  );
};

export default OrderList;
