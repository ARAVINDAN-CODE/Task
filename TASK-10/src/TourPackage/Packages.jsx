import React, { useState } from 'react';
import { Card, Container, Figure, Row ,Col, Accordion, Carousel,Form } from 'react-bootstrap';
import { obj ,city1,city2,city3,city4,city5,city6,city7,city8,city9,city10} from './Datapackage';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faVanShuttle } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalkingLuggage } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Packages = () => {
  const [city,setcity]=useState(city1);
  const arr=[city1,city2,city3,city4,city5,city6,city7,city8,city9,city10]
  const handlecity=((index)=>{
    setcity(arr[index])
  });
  return (
    <Container style={{backgroundColor:'lightgrey'}}>
      <section className='d-flex mt-5 mb-5 p-2'>
        <div className='me-3'>
        <Figure.Image 
            src={require(`../Components/Gallery/ooty2.jpeg`)}
            style={{width:'6em',height:'6em'}} 
          />
          <Figure.Image 
            src={require(`../Components/Gallery/kodaikanal2.jpeg`)}
            style={{width:'6em',height:'6em'}} 
          />
        {obj.map((item) => (
          <Figure.Image 
            src={require(`../Components/Tourimg/${item.src}`)}
            style={{width:'6em',height:'6em'}} 
          />))}
        </div>
        <div>
          <br></br>
          <h3>Welcome to Tamil Nadu: Discover the Land of Diversity</h3>
          <p style={{textIndent:'15%',textAlign:'justify'}}>
          Nestled in the southern part of India, Tamil Nadu is a land of rich culture, stunning landscapes, and vibrant traditions. This enchanting state offers a tapestry of experiences for travelers, making it a top destination for those seeking a diverse and immersive journey. Explore the myriad of Tamil Nadu tourism packages and embark on a captivating adventure through this remarkable part of India.
          </p>
          <p style={{textIndent:'15%',textAlign:'justify'}}>
          Tamil Nadu boasts a heritage that stretches back thousands of years, evident in its ancient temples, classical dance forms, and traditional festivals. Our Tamil Nadu tourism packages will take you on a cultural odyssey where you can witness the intricate stone carvings at the Meenakshi Amman Temple in Madurai, or be entranced by the rhythmic movements of Bharatanatyam, a classical dance form that originated here.
          </p>
          <p style={{textIndent:'15%',textAlign:'justify'}}>
          Our Tamil Nadu tourism packages are designed to cater to a wide range of interests, ensuring that every traveler can uncover the beauty and diversity of this remarkable state. Whether you're a history buff, a nature lover, an adventure enthusiast, or simply seeking relaxation, Tamil Nadu has something to offer you. So, come and explore this captivating land, where every corner has a story to tell, and every experience is a memory waiting to be made.
          </p>
        </div>
      </section>
      <Row>
        {obj.map((item, index) => (
          <Col md={12}>
              <Card className='maincard m-3' key={index}>
                <Card.Body className='d-flex'>
                  <Figure.Image 
                    src={require(`../Components/Tourimg/${item.src}`)}
                    style={{width:'20em',height:'13em'}} 
                  />
                  <Card.Text className='m-2 ms-5'>
                    <span style={{fontSize:'1.9em',color:'red',fontWeight:'bold'}}>
                      {item.place} To Beautiful Destinations
                    </span>
                    <p className='m-3' style={{textAlign:'justify',textIndent:'15%'}}>
                      {item.para}
                    </p>
                  </Card.Text>
                </Card.Body>
                  <Accordion onClick={()=>handlecity(index)}>
                    <Accordion.Item eventKey='0'>
                      <Accordion.Header>
                        <span style={{fontSize:'1.3em',color:'darkgreen',fontWeight:'bold'}}>
                          Departure : {item.place}</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <Carousel>
                          {(city).map((data) => (
                              <Carousel.Item>
                                <Row>
                                  {data.map((value,index1)=>(
                                    <Col md={4}>
                                      <Card key={index1} className='cardalign'>
                                        <img 
                                          src={require(`../Components/Gallery/${value.src}`)}
                                          style={{width:'21em',height:'12em'}}>
                                        </img>   
                                        <Card.Body>
                                        <div>
                                          <h5><FontAwesomeIcon icon={faLocationDot} style={{color:'skyblue'}}/> 
                                            {" "+item.place}-{value.place}
                                          </h5>
                                          <h6 style={{color:'orangered'}}>{value.days}</h6>
                                          <h5>Total Amount: {value.amt}</h5>
                                        </div>
                                        <h6>Time: {value.time}</h6>
                                        <Row>
                                          <Col><FontAwesomeIcon icon={faUtensils} /><br /> Food</Col>
                                          <Col><FontAwesomeIcon icon={faHotel} /><br /> Hotel</Col>
                                          <Col><FontAwesomeIcon icon={faVanShuttle} /><br /> Travel</Col>          
                                          <Col><FontAwesomeIcon icon={faPersonWalkingLuggage} /><br /> Luggage</Col>          
                                        </Row>
                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        <button style={{backgroundColor:'green',color:'azure'}}>BOOK NOW</button>
                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        <button style={{backgroundColor:'green',color:'azure'}}>Contact us</button>
                                        </Card.Body>
                                      </Card>
                                    </Col>
                                  ))}
                                </Row>
                              </Carousel.Item>
                            ))}
                        </Carousel>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
              </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Packages;