import React from 'react'
import {Button ,Modal ,Offcanvas, Row ,Col ,Accordion} from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BestTimeToVisit = () => {
  const [showchennai, setShowchennai] = useState(false);
  const handleClosechennai = () => setShowchennai(false);
  const handleShowchennai = () => setShowchennai(true);

  const [showrameshwaram, setShowrameshwaram] = useState(false);
  const handleCloserameshwaram = () => setShowrameshwaram(false);
  const handleShowrameshwaram = () => setShowrameshwaram(true);

  const [showkodaikanal, setShowkodaikanal] = useState(false);
  const handleClosekodaikanal = () => setShowkodaikanal(false);
  const handleShowkodaikanal = () => setShowkodaikanal(true);

  const [showOoty, setShowOoty] = useState(false);
  const handleCloseOoty = () => setShowOoty(false);
  const handleShowOoty = () => setShowOoty(true);

  const [showkanyakumari, setShowkanyakumari] = useState(false);
  const handleClosekanyakumari = () => setShowkanyakumari(false);
  const handleShowkanyakumari = () => setShowkanyakumari(true);

  const [showkumbakonam, setShowkumbakonam] = useState(false);
  const handleClosekumbakonam = () => setShowkumbakonam(false);
  const handleShowkumbakonam = () => setShowkumbakonam(true);

  const [showmadurai, setShowmadurai] = useState(false);
  const handleClosemadurai = () => setShowmadurai(false);
  const handleShowmadurai = () => setShowmadurai(true);

  const [showyercaud, setShowyercaud] = useState(false);
  const handleCloseyercaud = () => setShowyercaud(false);
  const handleShowyercaud = () => setShowyercaud(true);

  const [showtheni, setShowtheni] = useState(false);
  const handleClosetheni = () => setShowtheni(false);
  const handleShowtheni = () => setShowtheni(true);

  const [showhogenakkal, setShowhogenakkal] = useState(false);
  const handleClosehogenakkal = () => setShowhogenakkal(false);
  const handleShowhogenakkal = () => setShowhogenakkal(true);

  return (
    <div>
      <section>
        <div className='container'>
          <h5 className='mt-5'>TAMILNADU TOURISM</h5>
          <h3 className='mb-5'>Best Time To Visit</h3>

          <div className='d-flex'>
          <figure className='text-center'>
            <img src={require("./Gallery/Climate.jpeg")} style={{width: '35em'}}/>
            <figcaption className='text-center'>Best Time To Visit</figcaption>
          </figure>

            <div className='ms-5'>
              <h6 className='mb-5 text-center'>More about Best Time to travel to Tamilnadu</h6>
              <Accordion style={{width: '30em'}}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Tamil Nadu in summer (March -May)</Accordion.Header>
                  <Accordion.Body >
                    <div style={{ textIndent: '18%' ,fontSize: 'medium',textAlign:'justify'}}>
                      This season begins in March and lasts until May. The temperatures are high, ranging between 35°C and 40°C and so is the humidity especially in the coastal regions. Sightseeing during this time is not very convenient because of the improper temperature. The season, however, is visited to witness the festival of Chithirai held in the Madurai temple in the month of March-April. Puthandu, another important festival that marks the Tamil New year falls in mid-April and Mahamahan Festival is celebrated in March (celebrated once in 12 years). If visiting during summer, it is a good idea to visit the attractions on higher attitudes. Hill stations like Ooty, Kodaikanal and Yelagiri hills are the best where the temperature is pleasant and has scenic views that tourists can witness.
                    </div>
                    <figure className='text-center'>
                      <img src={require("./Gallery/image.jpeg")} style={{width: '27em'}}/>
                      <figcaption className='text-center'>Pillar Rocks of Kodaikanal Source</figcaption>
                    </figure>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Tamil Nadu in monsoon (June - September)</Accordion.Header>
                  <Accordion.Body>
                  <div style={{ textIndent: '18%' ,fontSize: 'medium',textAlign:'justify'}}>
                    This southern state sees monsoon two times a year - once between June to September and the retreating monsoon in November and December. The temperature is slightly less than what it is in the summer season. It ranges between 25°C and 30°C. The rains often occur in long spells and the humidity during this time is high especially in coastal regions. Some of the hilly areas see massive rainfall and venturing out during this time around is not a great idea. The Eastern seaboard of Tamil Nadu sometimes experiences cyclones during the late monsoon, making it an unsafe place to visit.
                  </div>
                    <figure className='text-center'>
                      <img src={require("./Gallery/image1.jpeg")} style={{width: '27em'}}/>
                      <figcaption className='text-center'>Pillar Rocks of Kodaikanal Source</figcaption>
                    </figure>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Tamil Nadu in winter (October - February)</Accordion.Header>
                  <Accordion.Body >
                  <div style={{ textIndent: '18%' ,fontSize: 'medium',textAlign:'justify'}}>
                    Winter in Tamil Nadu begins in October and lasts until February. November and December have intermittent rainfall because of the retreating monsoon, but otherwise, the temperature remains between 10°C and 15°C. The humidity is low, and it is the best climate for sightseeing and touring the cities. Most of the tourist attractions are bustling with activities during this season. The beaches call the beach lovers, and adventure seekers for bathing in the sun, swimming and water sports as the temperature remains moderate all through the day.
                  </div>
                    <figure className='text-center'>
                      <img src={require("./Gallery/image2.jpeg")} style={{width: '27em'}}/>
                      <figcaption className='text-center'>Pillar Rocks of Kodaikanal Source</figcaption>
                    </figure>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className='mb-5 pb-5' style={{ textIndent: '18%' ,textAlign:'justify'}}>
            The best time to visit Tamil Nadu is during the winter season, i.e., from November to February when the temperature is relatively low, and pleasant to explore the attractions in the state. Monsoons bring torrential downpour which makes it an inappropriate time to travel through Tamil Nadu, Summer, however, is perfect for exploring the hills stations. Tourists can pick the region they wish to see according to the season because offseason visits could be extremely inconvenient for some.
          </div>

          <div className='text-center mt-5 pt-2 mb-5 pb-3'>
            <h3>TAMILNADU TOURISM</h3>
            <h6>Best Time to Visit</h6>
          </div>
        
        </div>
      </section>


      <section className='container d-flex mt-5'>
        <div>
          <h3>01.Chennai</h3>
          <h5 className='mt-5'>What is the best time to visit:</h5>
          <p className='btvtext' style={{ textIndent: '38%' ,fontSize: 'medium'}}>
            October to February during the winters and the pre-monsoons season is the best time to visit Chennai. This time of the year is considered as the best time to explore the metropolitan city as summers are scorching and monsoons bring torrential downpours and cyclones. Its geographical location on the beautiful coastline mostly keeps the city's weather hot and humid.
          </p>
          <p className='btvtext' style={{ textIndent: '38%' ,fontSize: 'medium'}}>
            Chennai is one of the cities that has successfully blended the modern, traditional and sides with ease. The city welcomes everyone who wants to seek a soulful and spiritual connection but also those who love shopping for sarees and enjoy good food. There is no conundrum in Chennai when you visit. It's all about the moment, whether you decide to take a stroll down Marina Beach.
          </p>
        </div>
        <div
          className="modal show"
          style={{ display: 'block', position: 'relative' }}>
          <Modal.Dialog className="ms-5" >
            <Modal.Header closeButton>
              <Modal.Title className='text-center me-3'>More About Best Time To Travel To Chennai</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/chennai1.jpeg')}>
                </img>
                <figcaption className='text-center'>chennai, <br></br>india<br></br> source</figcaption>
              </figure>
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/chennai2.jpeg')}>
                </img>
                <figcaption className='text-center'>chennai,<br></br>Kathipara<br></br> source</figcaption>
              </figure>
              <figure>
                <img
                className='btvimg'
                src={require('./Gallery/chennai3.jpeg')}>
                </img>
                <figcaption className='text-center'>chennai, <br></br>Beach<br></br> source</figcaption>
              </figure>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClosechennai}>Close</Button>
              <Button variant="primary" onClick={handleShowchennai}>Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
          <div>
            <Offcanvas show={showchennai} onHide={handleClosechennai}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='text-center ms-5 ps-4'><b>Best Time To Visit In <br></br>Chennai</b></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p><b>Chennai in Winters (November - February)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  Winters, the best time to visit Chennai, begin in November and last till February. Even the transitional month of October is quite good for exploring the city. The weather is quite pleasant with the maximum temperature hovering around 30°C and the minimum around 22°C. Its proximity to the coastline also results in occasional rains, but it will not be something that will hamper travel plans to a great extent. Kapaleeshwarar temple, Government Museum, Fort St George, St. Andrews Church, Fort Museum, Nalli Silks, Kalakshetra Foundation, Vivekananda House etc. are some of the attractions that can be seen when in Chennai. The season is also famous for the array of festivals organized in the city like the Dance and Music Festival in December, Travel & Tourism Fair and Pongal in January and the Natyanjali Dance Festival held in February/ March. These events are traditional and important celebrations of Chennai and its culture and must not be missed when there.
                </p>
                <p className='mt-5'><b>Chennai in Summers (March - June)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  March marks the onset of the summer season in Chennai. It lasts till June and visiting the city during this time is not for the faint- hearted, some say. The days are blazing hot with the temperatures soaring as high as 39°C and the nights are equally warm with the minimum hovering around 27°C. Exploring the cityscape during this time of the year is an extremely exhausting affair and is, therefore, not advised to tourists.
                </p>
                <p className='mt-5'><b>Chennai in Monsoons (July-September)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  Chennai is susceptible to heavy downpours and cyclones between the months of July and September. These months mark the monsoon season in the region and is considered off-season as tourism does not really thrive here. The extreme rainfalls and strong winds could prove to be a hindrance to sightseeing and, therefore, the monsoon season is not recommended to tourists. The hotel tariffs, however, drop drastically during the season, making it a decent option for budget travelers. In case one must visit Chennai, they may want to plan a trip at the onset of the season when the showers are moderate and allow travelling through the city.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
        </div>
        </div>
      </section>



     <section className='container mt-5'>
      <h3>02.Rameshwaram</h3>
      <Row className="align-items-center">
        <Col md={5}> 
          <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
            >
            <Modal.Dialog  show={showrameshwaram} onHide={handleCloserameshwaram} backdrop={false}>
              <Modal.Header closeButton>
                <Modal.Title className='text-center modal-heading'>More About Best Time To Travel To Rameswaram</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex justify-content-center">
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/rameshwaram1.jpeg')}>
                </img>
                <figcaption className='text-center'>Railway <br></br>Bridge<br></br> source</figcaption>
              </figure>
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/rameshwaram2.jpeg')}>
                </img>
                <figcaption className='text-center'>LightHouse<br></br> source</figcaption>
              </figure>
              <figure>
                <img
                className='btvimg'
                src={require('./Gallery/rameshwaram3.jpeg')}>
                </img>
                <figcaption className='text-center'>Pilgrims<br></br>Temple<br></br> source</figcaption>
              </figure>
            </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloserameshwaram}>Close</Button>
                <Button variant="primary" onClick={handleShowrameshwaram}>Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>

            <Offcanvas show={showrameshwaram} onHide={handleCloserameshwaram} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className='text-center ms-5 ps-4'><b>Best Time To Visit In <br></br>Rameswaram</b></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p><b>Rameshwaram in Winter (December- February)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  Winters in Rameshwaram, which last from October all the way to March, is said to be the peak season for visiting Rameshwaram if you are visiting the place as a tourist and not a pilgrim. The temperature during these months drops considerably than the other two seasons, with it ranging from 20 degree Celsius to 30-degree Celsius. The town is also blessed with chilly winds which make the atmosphere even more amicable. This season, therefore, makes for the best time for tourists to take part in a plethora of outdoor activities and enjoy their stay. During December, Rameshwaram also hosts the festival of Arudhra Darshanam which is essentially a festival that celebrates an aspect of Lord Shiva. This is said to be one of the most celebrated festivals amongst all the ones celebrated in Rameshwaram.
                </p>
                <p className='mt-5'><b>Rameshwaram in Monsoon (July - October)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  The monsoons in Rameshwaram experience temperatures ranging from 28 degree Celsius to 35 degree Celsius. These temperatures are similar to those during the summers, as is the climate except the small relief of humidity received due to short but effective downpours. Though monsoons are humid, August-October offers a good climate to explore Rameswaram as temperatures drop down during this time.
                </p>
                <p className='mt-5'><b>Rameshwaram in Summer (March - June)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  The summers in Rameshwaram last from April to July and the average temperatures during this time range from 27 degree Celsius to 40 degree Celsius. Summers are also called the pilgrim season in Rameshwaram, meaning the town may be exceptionally crowded with chances of various processions and chants throughout the area. The climate in the summers stays hot, as is usual for most Tamil Nadu towns, with the afternoons Being exceptionally sunny. However, the rest of the day is said to clear up, and the heat may not bother you as much.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
       </Col>
       <Col md={7} >
       <div className="ms-4">
          <p className='mt-4'><b>What is the best time to visit:</b></p>
          <p className='' style={{ textIndent: '38%',fontSize: 'medium',textAlign: 'justify' }}>
            The best time to visit Rameshwaram is from October to April. However, as far as the weather goes, Rameshwaram experiences tropical climate which means the though the seasons greatly vary, the temperatures may not. This makes Rameshwaram a destination which can be visited all year round. Winters (November to February) are cool and temperature comes down to 17 degrees Celsius. This is the most pleasant season for sightseeing and visiting neighborhoods. The Monsoons (July to September) are humid with average rainfalls, but the scenic view of the coastal region during these months is enjoyable.
          </p>
          <p style={{ textIndent: '38%',fontSize: 'medium',textAlign: 'justify' }}>
            Dotted with temples along the seashore and located on a beautiful island, rumor has it that this is where Lord Rama built the bridge across the ocean to reach Sri Lanka. One of the holiest places in the country, pilgrim’s flocks to this town to pay their respects and worship Lord Shiva. With a tropical climate throughout the year, this hamlet can pretty much be visited at any time.
          </p>
        </div>
          </Col>
       </Row>
    </section>



    <section className='container d-flex mt-5'>
        <div>
          <h3>03. Kodaikanal</h3>
          <h5 className='mt-5'>What is the best time to visit:</h5>
          <p className='btvtext' style={{ textIndent: '38%' ,fontSize: 'medium'}}>
            The best time to visit Kodaikanal is from October to June, however, the weather remains a bit chilly during December and January. Ideal for a vacation in each season, Kodaikanal is the most colorful in summers and most picturesque in monsoons. If your trip consists of an itinerary that includes a lot of sights to see, then summer is the best time to visit this place and those who wish to go for trekking, plan your trip to Kodaikanal between October and February.
          </p>
          <p className='btvtext' style={{ textIndent: '38%' ,fontSize: 'medium'}}>
            Kodaikanal is lovingly referred to as The Princess of Hill stations. And boy, does it take this title seriously! Built around an exotic star shaped lake, the region exudes ethereal charm like that of fairy tales. The best time to visit Kodaikanal is from October - June, however, the weather remains a bit chilly during December and January.
          </p>
        </div>
        <div
          className="modal show"
          style={{ display: 'block', position: 'relative' }}>
          <Modal.Dialog className="ms-5">
            <Modal.Header closeButton>
              <Modal.Title className='text-center me-3'>More About Best Time To Travel To Kodaikanal</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/kodaikanal1.jpeg')}>
                </img>
                <figcaption className='text-center'>Upper Lake<br></br> source</figcaption>
              </figure>
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/kodaikanal2.jpeg')}>
                </img>
                <figcaption className='text-center'>Kodaikanal<br></br>Lake<br></br> source</figcaption>
              </figure>
              <figure>
                <img
                className='btvimg'
                src={require('./Gallery/kodaikanal3.jpeg')}>
                </img>
                <figcaption className='text-center'>Pillar Rocks<br></br> source</figcaption>
              </figure>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClosekodaikanal}>Close</Button>
              <Button variant="primary" onClick={handleShowkodaikanal}>Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
          <div>
            <Offcanvas show={showkodaikanal} onHide={handleClosekodaikanal}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='text-center ms-5 ps-4'><b>Best Time To Visit In <br></br>Kodaikanal</b></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p><b>Kodaikanal in Summer (March-June)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  Summers (March to June) in Kodaikanal is Ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.
                </p>
                <p className='mt-5'><b>Kodaikanal in Winter (December-February)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  Summers (March to June) in Kodaikanal is ideal with comfortable 20-degree Celsius to 32-degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.
                </p>
                <p className='mt-5'><b>Kodaikanal in Monsoon (June-September)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  With a temperature that rarely falls below 8-degree Celsius, winter in Kodaikanal (between December and February) is the best time to enjoy various treks and attend the famous Pongal festival celebrated during January.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
        </div>
        </div>
      </section>



      <section className='container mt-5'>
      <h3>04. Ooty</h3>
      <Row className="align-items-center">
        <Col md={5}> 
          <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
          >
            <Modal.Dialog  show={showOoty} onHide={handleCloseOoty} backdrop={false}>
              <Modal.Header closeButton>
                <Modal.Title className='text-center modal-heading'>More About Best Time To Travel To Rameswaram</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex justify-content-center">
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/ooty1.jpeg')}>
                </img>
                <figcaption className='text-center'>Mountain <br></br>Railway<br></br> source</figcaption>
              </figure>
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/ooty2.jpeg')}>
                </img>
                <figcaption className='text-center'>Ooty Lake<br></br> source</figcaption>
              </figure>
              <figure>
                <img
                className='btvimg'
                src={require('./Gallery/ooty3.jpeg')}>
                </img>
                <figcaption className='text-center'>Trekking<br></br>Ooty<br></br> source</figcaption>
              </figure>
            </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseOoty}>Close</Button>
                <Button variant="primary" onClick={handleShowOoty}>Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>

            <Offcanvas show={showOoty} onHide={handleCloseOoty} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className='text-center ms-5 ps-4'><b>Best Time To Visit In <br></br>Ooty</b></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p><b>Ooty in Summer (March- June)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  Ooty experiences an average temperature that ranges between 23-degree Celsius and 31-degree Celsius, which is perfect for you to explore the sheer beauty of this place in full swing.
                </p>
                <p className='mt-5'><b>Ooty in Winter (October March)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  With temperatures that stay below 15-degree Celsius, winters in Ooty are perfect to have a gala time. Each year, during January or February, Department of Tourism in Tamil Nadu hosts The Tea and Tourism Festival for three days. A vast range of tea leaves are displayed, and rows of tea stalls are put up for tasting and buying a wide variety of tea. In addition to this, these three days are packed with cultural shows and performances, which reverberate with the heritage of the Nilgiris.
                </p>
                <p className='mt-5'><b>Ooty in Monsoon (July-September)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  People who love rainfall and green grass beds laid over mountains can pack their bags and head straight to Ooty during the monsoon months, which lasts between June and September. Even though you are unlikely to experience the bright, warm sunshine, you will have a great time, nevertheless.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
       </Col>
       <Col md={7} >
       <div className="ms-4">
          <p className='mt-4'><b>What is the best time to visit:</b></p>
          <p className='' style={{ textIndent: '38%',fontSize: 'medium',textAlign: 'justify' }}>
            The best time to visit Ooty is throughout the year as the weather is pleasant and great for sightseeing. The temperature usually ranges from 5-15 degrees throughout the year with colder nights. However, the peak season is from October to June when the weather is pleasant, and you can get involved in outdoor activities. Ooty can be visited during monsoons (if you don't mind the rain) when the freshly washed surroundings give Ooty an ethereal charm. The annual Tea and Tourism Festival attracts crowds in huge numbers to visit the place and have a great time in this wonderful place.
          </p>
          <p style={{ textIndent: '38%',fontSize: 'medium',textAlign: 'justify' }}>
            The poised and elegant 'Queen of Hill Stations welcomes you to the kingdom in the clouds. Individuals travel far and wide to partake in the awe-inspiring wonders of one of India's most beloved hill stations - Ootacamund or Ooty. Here, history and culture form a sweet medley, while nature sings to its own symphony. Colonial churches, Hindu temples, tribal museums, and libraries brand the plains with stories.
          </p>
        </div>
          </Col>
       </Row>
    </section>



    <section className='container d-flex mt-5'>
        <div>
          <h3>05. Kanyakumari</h3>
          <h5 className='mt-5'>What is the best time to visit:</h5>
          <p className='btvtext' style={{ textIndent: '38%' ,fontSize: 'medium'}}>
            The months from October until February are considered the best time to visit Kanyakumari, as the weather remains calm and pleasant. Although this coastal region is a bit humid, this is the best time to try out some adventurous water sports, going on sightseeing and outings, undertaking beach activities and savoring the spectacular sunset views. With the beginning of winters in November, Kanyakumari also hosts many festivals during this month, for instance the Cape Festival.
          </p>
          <p className='btvtext' style={{ textIndent: '38%' ,fontSize: 'medium'}}>
            Kanyakumari is the southernmost tip of India. As Kanyakumari is close to the seas, the expanse experiences a tropical coastal climate. There are not many variations in the seasons, as there is an overall humidity and seasonal rain during the year.
          </p>
        </div>
        <div
          className="modal show"
          style={{ display: 'block', position: 'relative' }}>
          <Modal.Dialog className="ms-5">
            <Modal.Header closeButton>
              <Modal.Title className='text-center me-3'>More About Best Time To Travel To Kanyakumari</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/kanyakumari1 (1).jpeg')}>
                </img>
                <figcaption className='text-center'>Landscape<br></br> source</figcaption>
              </figure>
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/kanyakumari1 (2).jpeg')}>
                </img>
                <figcaption className='text-center'>Sea<br></br> source</figcaption>
              </figure>
              <figure>
                <img
                className='btvimg'
                src={require('./Gallery/kanyakumari1 (3).jpeg')}>
                </img>
                <figcaption className='text-center'>CoastBeach<br></br> source</figcaption>
              </figure>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClosekanyakumari}>Close</Button>
              <Button variant="primary" onClick={handleShowkanyakumari}>Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
          <div>
            <Offcanvas show={showkanyakumari} onHide={handleClosekanyakumari}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='text-center ms-5 ps-4'><b>Best Time To Visit In <br></br>Kanyakumari</b></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p><b>Kanyakumari in Winters (October to March)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  Winters in Kanyakumari are the best time for sightseeing and travelling around the place. Attractions such as Vavathurai, Chitharal Hill Temple and Thiruvalluvar Statue are popular among the tourists. November is a very favorable month for visiting Kanyakumari as the weather is pleasant with clear skies and less humidity. Temperatures vary from 15-degree Celsius to 35-degree Celsius. It is also the perfect time for indulging in beach activities like sunbathing, swimming, and surfing. December to February are the peak seasons; hence the tourism sector gets maximum revenue during this time.
                </p>
                <p className='mt-5'><b>Kanyakumari in Summers (April to June)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  Kanyakumari experiences moderate weather during summers with temperatures ranging from 22 degrees to 35 degrees Celsius. During this period the weather is humid; however, the climatic conditions are apt for visiting the various attractions of the place including Vivekananda Rock, Vattakottai Fort and Gandhi Museum. Apart from this, the various beach activities are open throughout summer, so tourists can indulge in outdoor visits, sea bathing and surfing. Although early summers are an ideal time to visit Kanyakumari, the month of April gets considerably hot which is why this month is not preferred for travel. However, the place gets vacant with less crowd and cheaper accommodation - a perfect time for budget travelers.
                </p>
                <p className='mt-5'><b>Kanyakumari in Monsoons (July to September)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  Monsoons in Kanyakumari starts in June which helps in tremendously lowering the temperature. However, the level of humidity keeps rising making it difficult to travel around. If you're a pluviophile, then the month of August is best recommended as the atmosphere is pleasant with a slight drizzle that enhances the beauty of this coast. Apart from its humidity, this is a good time to visit during monsoons. The frequent showers put a hold on sightseeing which affects the footfall in Kanyakumari in September; however, the Cape Festival takes place in October, and by this time tourists from around India visit Kanyakumari.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
        </div>
        </div>
      </section>



      <section className='container mt-5'>
      <h3>06. Kumbakonam</h3>
      <Row className="align-items-center">
        <Col md={5}> 
          <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
            >
            <Modal.Dialog  show={showkumbakonam} onHide={handleClosekumbakonam} backdrop={false}>
              <Modal.Header closeButton>
                <Modal.Title className='text-center modal-heading'>More About Best Time To Travel To Kumbakonam</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex justify-content-center">
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/kumbakonam1.jpeg')}>
                </img>
                <figcaption className='text-center'>Dawn<br></br> source</figcaption>
              </figure>
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/kumbakonam2.jpeg')}>
                </img>
                <figcaption className='text-center'>Steemit</figcaption>
              </figure>
              <figure>
                <img
                className='btvimg'
                src={require('./Gallery/kumbakonam3.jpeg')}>
                </img>
                <figcaption className='text-center'>Holydham<br></br> source</figcaption>
              </figure>
            </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClosekumbakonam}>Close</Button>
                <Button variant="primary" onClick={handleShowkumbakonam}>Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>

            <Offcanvas show={showkumbakonam} onHide={handleClosekumbakonam} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className='text-center ms-5 ps-4'><b>Best Time To Visit In <br></br>Kumbakonam</b></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p><b>Kumbakonam in Winter (December- February)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  The monsoon is associated with frequent and untimely shower spells in the region. The temperature drops down considerably after the scorching summers and the place witness a waste stretch of greenery as the rains give life to the flora of the region. The rains can though be problematic at times and can interfere with your exploration plans, but overall, this season can also be preferred by tourists to pay a visit to Kumbakonam.
                </p>
                <p className='mt-5'><b>Kumbakonam in Monsoon (July - October)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  Summers in the Deccan region of the country is undeniable hot, and the scorching sun might be an unpleasant experience. The summers are usually arid and heated up, and the temperature goes up to 40 degrees Celsius during the day. The season is majorly avoided by tourists to plan a visit to Kumbakonam because of the overall weather conditions.
                </p>
                <p className='mt-5'><b>Kumbakonam in Summer (March - June)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  The summers in Rameshwaram last from April to July and the average temperatures during this time range from 27 degree Celsius to 40 degree Celsius. Summers are also called the pilgrim season in Rameshwaram, meaning the town may be exceptionally crowded with chances of various processions and chants throughout the area. The climate in the summers stays hot, as is usual for most Tamil Nadu towns, with the afternoons Being exceptionally sunny. However, the rest of the day is said to clear up, and the heat may not bother you as much
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
       </Col>
       <Col md={7} >
       <div className="ms-4">
          <p className='mt-4'><b>What is the best time to visit:</b></p>
          <p className='' style={{ textIndent: '38%',fontSize: 'medium',textAlign: 'justify' }}>
            Located in the tropical area and the Deccan region of the country, Kumbakonam has the typical tropical climate, with pleasant winters and hot and dry summers. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable times to pay a visit. The summers are hot and largely uncomfortable for one to visit the place.
          </p>
          <p style={{ textIndent: '38%',fontSize: 'medium',textAlign: 'justify' }}>
            Kumbakonam has a typical tropical climate. Regions around the Cauvery Delta are rather hot, but Kumbakonam has moderate weather throughout the year and summers are said to be far better than in hot coastal cities like Chennai. All said, there are numerous places to visit in Kumbakonam and it were better you choose the most ideal time for a visit. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable times to pay a visit.
          </p>
        </div>
          </Col>
       </Row>
    </section>



    <section className='container d-flex mt-5'>
        <div>
          <h3>07. Madurai</h3>
          <h5 className='mt-5'>What is the best time to visit:</h5>
          <p className='btvtext' style={{ textIndent: '38%' ,fontSize: 'medium'}}>
            October to March is the best time to visit Madurai, with a hot and dry climate for most of the year, Madurai is best visited during the winter season. The town is known for its ancient temples and other architectural and religious masterpieces and receives a generous crowd of people throughout the year. Madurai is the most fascinating and welcoming during the months between October and March which coincides with its winter season.
          </p>
          <p className='btvtext' style={{ textIndent: '38%' ,fontSize: 'medium'}}>
            Madurai is one of the oldest culturally vibrant cities of India. Its historical places and temples have a steady flow of tourists from all around the world.
          </p>
        </div>
        <div
          className="modal show"
          style={{ display: 'block', position: 'relative' }}>
          <Modal.Dialog className="ms-5">
            <Modal.Header closeButton>
              <Modal.Title className='text-center me-3'>More About Best Time To Travel To Madurai</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/madurai1.jpeg')}>
                </img>
              </figure>
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/madurai2.jpeg')}>
                </img>
              </figure>
              <figure>
                <img
                className='btvimg'
                src={require('./Gallery/madurai3.jpeg')}>
                </img>
              </figure>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClosemadurai}>Close</Button>
              <Button variant="primary" onClick={handleShowmadurai}>Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
          <div>
            <Offcanvas show={showmadurai} onHide={handleClosemadurai}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='text-center ms-5 ps-4'><b>Best Time To Visit In <br></br>Madurai</b></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p><b>Madurai in summer (March -May)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  Many locals look forward to the winter season in Madurai due to the relief it brings from the summers. The season lasts from December to February. The temperature during the winter months ranges from 20 degree Celsius to 29 degrees Celsius. The season is characterized by moderately cool temperatures which make travelling around the city a pleasant experience for all individuals. Pongal, a widely celebrated festival is regarded as extremely special in Madurai. The festival lasts for three days and comprises of praying for a good harvest by locals and farmers alike. Other religious festivals are also celebrated with great vigour. However, hotel prices may climb up as this is the peak tourist season.
                </p>
                <p className='mt-5'><b>Madurai in monsoon (June - September)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  Monsoon season in Madurai lasts from June to August. Although the monsoon season continues for a smaller amount of time, the south-west monsoon winds bring in a large amount of rainfall which is extremely heavy. This rainfall also makes the weather gloomy but still makes the city beautiful as the nature around Madurai mainly benefits from this rain. This is the perfect time to visit Madurai for people who love greenery surroundings.
                </p>
                <p className='mt-5'><b>Madurai in winter (October - February)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  The summer season in Madurai lasts from March to May. The temperatures during this season range from 24 degree Celsius to 34 degrees Celsius. This means that the weather in Madurai during these months is uncharacteristically hot. It is also dry which makes the heat more noticeable and discourages travelers to visit. The summer season is, therefore, an offseason for Madurai, and the crowds are comparatively less as well.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
        </div>
        </div>
      </section>



      <section className='container mt-5'>
      <h3>08. Yercaud</h3>
      <Row className="align-items-center">
        <Col md={5}> 
          <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
            >
            <Modal.Dialog  show={showyercaud} onHide={handleCloseyercaud} backdrop={false}>
              <Modal.Header closeButton>
                <Modal.Title className='text-center modal-heading'>More About Best Time To Travel To Yercaud</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex justify-content-center">
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/yercaud1.jpeg')}>
                </img>
                <figcaption className='text-center'>Easemytrip<br></br> source</figcaption>
              </figure>
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/yercaud2.jpeg')}>
                </img>
                <figcaption className='text-center'>Oyorooms<br></br> source</figcaption>
              </figure>
              <figure>
                <img
                className='btvimg'
                src={require('./Gallery/yercaud3.jpeg')}>
                </img>
                <figcaption className='text-center'>Hiveminer<br></br>Temple<br></br> source</figcaption>
              </figure>
            </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseyercaud}>Close</Button>
                <Button variant="primary" onClick={handleShowyercaud}>Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>

            <Offcanvas show={showyercaud} onHide={handleCloseyercaud} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className='text-center ms-5 ps-4'><b>Best Time To Visit In <br></br>Yercaud</b></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p><b>Yercaud in Winter (December- February)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  Yercaud experiences a delightful climate from October to February. The average temperature which stays between a pleasant 10 degree Celsius and 15-degree Celsius is ideal for leisurely nature walks as well as adventure activities. Do not miss out on the Bear's Cave, Pagoda Paint, Shevaray Temple, and Anna Park, if you plan to visit this beautiful place during winter.
                </p>
                <p className='mt-5'><b>Yercaud in Monsoon (July - October)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  Yercaud experiences a hot and humid monsoon with temperatures that range between 20-degree Celsius and 25 degree Celsius from June to September. At this time, the coffee plantations look ethereal after being washed by the rain. The Botanical Garden, Raja Rajeshwari Temple, and the Sri Chakra Mahameru Temple are some of the places you should visit during this time.
                </p>
                <p className='mt-5'><b>Yercaud in Summer (March-June)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  With temperatures that hardly move out of the range between 24-degree Celsius and 28-degree Celsius, Yercaud experiences mild summers during March to June. The best places to visit during this season are the enchanting Emerald Lake, Killiyur Falls, Silk Farm, and Lady’s Seat. Apart from these attractions, one festival which allures tourists from every nook of the world is the Yercaud Summer Festival. Held in May, it is an annual festival which keeps everyone on their toes until its arrival. Usually taking place for five days, the enrapturing summer event is as grand as it gets! From sophisticated folk dances to bewitching musical concerts, from captivating cultural competitions to horse riding tournaments, this event is a treasure trove of a smorgasbord of wonderful activities.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
       </Col>
       <Col md={7} >
       <div className="ms-4">
          <p className='mt-4'><b>What is the best time to visit:</b></p>
          <p className='' style={{ textIndent: '38%',fontSize: 'medium',textAlign: 'justify' }}>
            October to June is the best time to visit Yercaud because the weather is dry and cool. However, Yercaud offers breathtaking views and a tranquil ambience throughout the year. During the month of May, a seven-day Summer Festival is conducted which includes flower shows, dog shows, boating races, and village fairs. Monsoons (July- September) could be avoided as rains might hamper your sightseeing plans, but the rains make this place extra beautiful, and you might not want to miss that either.
          </p>
          <p style={{ textIndent: '38%',fontSize: 'medium',textAlign: 'justify' }}>
            Yercaud celebrates seasonal festivals that are in tune with the changing climatic conditions and showcase the nativity and culture of the hill town. If you are planning a weekend getaway or a long vacation, choose the best of the seasons so you can enjoy your trip to the finest. The best period to visit Yercaud is from October to June, when the weather is at its best.
          </p>
        </div>
          </Col>
       </Row>
    </section>



    <section className='container d-flex mt-5'>
        <div>
          <h3>09. Theni</h3>
          <h5 className='mt-5'>What is the best time to visit:</h5>
          <p className='btvtext' style={{ textIndent: '38%' ,fontSize: 'medium'}}>
            To spend your vacation in the lap of nature in south India, no place would be better than the town of Cardamom Theni. The best season to visit Theni is winter when the weather remains all pleasant and favorable for tourism. On the other hand, summer remains hot, and monsoon receives a heavy rainfall which makes the two seasons not suitable for touring.
          </p>
          <p className='btvtext' style={{ textIndent: '38%' ,fontSize: 'medium'}}>
            Theni is known for having a salubrious climate throughout the year. The average temperature ranges between 15 degrees Celsius to 40 degrees Celsius. The best monk to visit are from the month of December to February since the weather is pleasant and allows you to indulge in several outdoor activities.
          </p>
        </div>
        <div
          className="modal show"
          style={{ display: 'block', position: 'relative' }}>
          <Modal.Dialog className="ms-5">
            <Modal.Header closeButton>
              <Modal.Title className='text-center me-3'>More About Best Time To Travel To Theni</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/theni1.jpeg')}>
                </img>
              </figure>
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/theni2.jpeg')}>
                </img>
              </figure>
              <figure>
                <img
                className='btvimg'
                src={require('./Gallery/theni3.jpeg')}>
                </img>
              </figure>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClosetheni}>Close</Button>
              <Button variant="primary" onClick={handleShowtheni}>Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
          <div>
            <Offcanvas show={showtheni} onHide={handleClosetheni}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='text-center ms-5 ps-4'><b>Best Time To Visit In <br></br>Theni</b></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p><b>Theni in summer</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  The summer season in Theni starts from the month of March and continues till May. The months are generally hot and not favorable to visit Theni. Temperature during these months’ ranges between 24°C and 42°C.
                </p>
                <p className='mt-5'><b>Theni in monsoon</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  December marks the beginning of winter season in Theni which ends in the month of February. The temperature during these months varies from 22°C to 32°C, and thus, the town witnesses a pleasant weather and make the season best to visit Theni.
                </p>
                <p className='mt-5'><b>Theni in winter</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  Monsoon in Theni strikes in the month of June and lasts until September. The town experiences a heavy rainfall during this time that fills the town with zest. Despite being at peak of its beauty, the town of Theni is not best to visit during monsoon.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
        </div>
        </div>
      </section>



      <section className='container mt-5'>
      <h3>10.Hogenakkal</h3>
      <Row className="align-items-center">
        <Col md={5}> 
          <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
            >
            <Modal.Dialog  show={showhogenakkal} onHide={handleClosehogenakkal} backdrop={false}>
              <Modal.Header closeButton>
                <Modal.Title className='text-center modal-heading'>More About Best Time To Travel To Hogenakkal</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex justify-content-center">
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/hogenakkal1 (1).jpeg')}>
                </img>
                <figcaption className='text-center'>Winter<br></br> source</figcaption>
              </figure>
              <figure className='me-4'>
                <img
                className='btvimg'
                src={require('./Gallery/hogenakkal1 (2).jpeg')}>
                </img>
                <figcaption className='text-center'>Monsoon<br></br> source</figcaption>
              </figure>
              <figure>
                <img
                className='btvimg'
                src={require('./Gallery/hogenakkal1 (3).jpeg')}>
                </img>
                <figcaption className='text-center'>Dry<br></br> source</figcaption>
              </figure>
            </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClosehogenakkal}>Close</Button>
                <Button variant="primary" onClick={handleShowhogenakkal}>Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>

            <Offcanvas show={showhogenakkal} onHide={handleClosehogenakkal} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className='text-center ms-5 ps-4'><b>Best Time To Visit In <br></br>Hogenakkal</b></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p><b>Hogenakkal in Winter (November- February)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  Watch the glory of nature take over Hogenakkal, as the south-west monsoon showers the region with about 150 mm of rainfall between these months. Hogenakkal is a sight to behold in the rain, as the Kaveri comes alive and usually floods her banks. While adventure enthusiasts and adrenaline junkies’ throng Hogenakkal in the monsoon, it is not recommended for tourists as the currents are too strong to swim in. Boating is not allowed either, or there is no standard means of transportation to reach the waterfalls. It is best to avoid the river, as the water flow may be too heavy. Further downhill, you can go rafting if you prefer, although discretion is advised. The waterfalls are a sight to behold, as they live up to their name of the 'Smoking Rocks - the sultry mist as the water strikes the rocks covers the base in a myriad of colors. Rainbows adorn the falls, and the scene is postcard perfect.
                </p>
                <p className='mt-5'><b>Hogenakkal in Monsoon (July-September)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  THogenakkal Waterfall is a popular destination attraction among nature lovers, adventure seekers, trekkers, and shutterbugs. If you are planning a trip to this waterfall, here is some information about Hogenakkal Falls timings, location, activities, parking fee and more.
                </p>
                <p className='mt-5'><b>Hogenakkal in Summer (March-June)</b></p>
                <p className='btvtext' style={{ textIndent: '28%' ,width: '21.8em',fontSize: 'medium'}}>
                  The Indian Peninsula lies in the tropics and is known for its sweltering summer heat. Temperatures soar to a maximum of 35°C in April, which is the hottest month of the year here. The water flow is minimal, and there are few waterfalls to reckon during these summer months. Most small waterfalls dry up. The rock facades are magnificent, though. The jagged rocks and steep gorges make for picture-perfect views and have been featured in many films as well.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
       </Col>
       <Col md={7} >
       <div className="ms-4">
          <p className='mt-4'><b>What is the best time to visit:</b></p>
          <p className='' style={{ textIndent: '38%',fontSize: 'medium',textAlign: 'justify' }}>
            The best time to visit Hogenakkal is during the winter from October - February to relax and unwind near the waterfalls. Winters in Hogenakkal is pleasant with moderate weather throughout the day. Whereas the summers are warm and sunny with temperatures ranging from 23 - 34-degree Celsius. Despite summers being an off season, a dip in the Hogenakkal lake is rejuvenating for all. Monsoon on the other hand has a pleasant weather with temperatures ranging from 13 to 20-degree Celsius, making it an ideal time to enjoy its spectacular beauty.
          </p>
          <p style={{ textIndent: '38%',fontSize: 'medium',textAlign: 'justify' }}>
            Hogenakkal Falls, located on the border of Tamil Nadu and Karnataka, is one of the most scenic places to visit in the region. The waterfall is known as Hogenakkal, or "Smoky Rocks", because of the unique arrangement of the gigantic, carbonated rocks that surround it. The sight of River Kaveri splitting into multiple small streams and cascading from different heights ranging from 15 feet to 66 feet will leave you mesmerized! Hogenakkal Waterfall is like the popular.
          </p>
        </div>
          </Col>
       </Row>
    </section>
    </div>
  )
}

export default BestTimeToVisit