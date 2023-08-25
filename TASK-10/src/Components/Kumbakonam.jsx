import React from 'react'

const Kumbakonam = () => {
  return (
    <div className='container mb-5 pt-5' id="Kumbakonam">
      <h3>06.Kumbakonam</h3>
      <div className='d-flex'>
      <img 
        className="distimg"
        src={require("./Home/Kumbakonam.jpeg")}
        alt="Kumbakonam">
       </img>
       <div className='disttext mt-5 ms-4 me-4 '>
        <p><b>"The Cambridge of India"</b></p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Kumbakonam Tourism Sandwiched between two great rivers of southern India, Cauvery and Arsala, Kumbakonam is a gorgeous temple town in the heart of the Thanjavur district of Tamil Nadu.The town is a place for the lovers of history and those seeking to understand India's cultural roots and Hinduism.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          The town is also known for its grand festival called Mahamaham festival which is celebrated eveny twelve years at the Mahamaham Tank. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes.
        </p>
       </div>
      </div> 
      <div>
        <h3 className='text-center m-5'><b>Must Visit Place In Kumbakonam</b></h3>
        <div className='card-group'>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/kumbakonam1 (1).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Sarangapani Temple</h5>
              <p className="card-text">Sarangapani Temple, an ancient temple dedicated to Lord Vishnu, is located in the town of Kumbakonam...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/kumbakonam1 (2).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Nageswaran Temple</h5>
              <p className="card-text"> Constructed as a chariot, the Nageswaran temple is an important Shaivite temple. A piece of genius Chola...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top border" 
              src={require("./Home/Kumbakonam3...jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Adi Kumbeshwara Temple</h5>
              <p className="card-text">Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara..</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/kumbakonam1 (4).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Airavatesvara Temple</h5>
              <p className="card-text">Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara Temple is a revered...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kumbakonam