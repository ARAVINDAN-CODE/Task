import React from 'react'

const Madurai = () => {
  return (
    <div className='container mb-5 pt-5' id="Madurai">
      <h3>07.Madurai</h3>
      <div className='d-flex'>
      <img 
        className="distimg"
        src={require("./Home/Madurai.jpeg")}
        alt="Madurai">
       </img>
       <div className='disttext mt-5 ms-4 me-4 '>
        <p><b>"The Lotus City"</b></p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Madurai Tourism Madurai, the cultural capital of Tamil Nadu, is one of the oldest continuously inhabited cities of India. Ruled by Pandya kings for the longest time in its history, it is called as the 'Lotus city as it was planned and built in the shape of a lotus. Madurai is known for Meenakshi Amman Temple, dedicated to the goddess Meenakshi with a sanctum for her consort, Sundareshwarar.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          There are many other ancient temples in Madurai, including Thiruparankundram. It is one of the important old temples dedicated to Lord Muruga(Karthikeya) and is located on a hillock approximately 8 km from the city. Having trade ties with ancient Rome, the place holds a great cultural heritage. With bustling bazaars and fantastic street food, Madurai has heritage walks conducted throughout the day.
        </p>
       </div>
      </div> 
      <div>
        <h3 className='text-center m-5'><b>Must Visit Place In Madurai</b></h3>
        <div className='card-group'>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/madurai1..jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Vaigai Dam</h5>
              <p className="card-text">Vaigai Dam, a magnificent human-made structure, is constructed over River Vaigai...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/madurai2.jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Meghamalai</h5>
              <p className="card-text"> Often known as the "High Wavy Mountains", Meghamalai is a petit yet beautiful place located in the Beautiful...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top border" 
              src={require("./Home/madurai3..jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Samanar Hills</h5>
              <p className="card-text">Located in Keelakuyilkudi village near Madurai, Samanar Hills or Samanar Malai is a beautiful hill rock...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/madurai4..jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Thirumalai Nayakar</h5>
              <p className="card-text">Thirumalai Nayakar Palace was erected in 1636 AD in the city of Madurai, by King Thirumalai Nayakar mahal...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Madurai