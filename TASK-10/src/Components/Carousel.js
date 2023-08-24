import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const MyCarousel = () => {
  return (
    <div className='container'>
      <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={require("./Home/banner1.jpg")}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={require("./Home/pic1.jpeg")}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={require("./Home/pic2.jpeg")}
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={require("./Home/pic3.jpeg")}
            alt="Fouth slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={require("./Home/pic4.jpeg")}
            alt="Fifth slide"
            />
        </Carousel.Item>
      </Carousel>
      <section className='intro text-center'>
        <span><b>Tourist Places To Tamilnadu</b></span><br></br>
        <span><b>Here Are The Top Places To Visit In Tamilnadu In 2023</b></span>
      </section>
    </div>
  );
}

export default MyCarousel;