import React from "react";
import { Col, Row } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';


const Home = () => {
  return (
      <Row className="justify-content-center align-items-center">
        <Col lg={12}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("./img/img1.jpeg")}
                alt="First slide"
                height="2050vh"
                fluid
              />
              <Carousel.Caption>
                <h1>THE CINEFLEX CINEMAS</h1>
                <h2>We are the first in the city to provide 4k cinema experience since 2015.</h2>
                <h2>We care our customer and we provide city best parking and convenience facilities.</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("./img/img2.jpg")}
                alt="First slide"
                height="2050vh"
                fluid
              />
              <Carousel.Caption>
                <h1>FOOD FACILITY</h1>
                <h2>We provide high quality food at reasonable price.</h2>
                <h2>We deliver snacks directly to your seats ,if booked along with ticket booking.</h2>
                <h2>Food supply is splitted into various counters so that you can purchase things without any rush.</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("./img/img4.jpg")}
                alt="Second slide"
                height="2050vh"
                fluid
              />

              <Carousel.Caption>
                <h1>SEATING FACILITY</h1>
                <h2>Movie experience is not fulfilled without comfortable seats.</h2>
                <h2>Our seats recline upto 120 degrees to reduce neck pain and provide relaxed experience.</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("./img/img5.jpg")}
                alt="Third slide"
                height="2050vh"
                fluid
              />

              <Carousel.Caption>
                <h1>SEATING POSITION</h1>
                <h2>Even the front row seats are in a good distance from screen so that even if you watch movie from that seats you will not feel neck pain</h2>
                <h2>Seats are separated with reasonable distance so that you can easily walk in and out even if every one are seated in their seats</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
  );
};

export default Home;