import React from 'react'

const Kanyakumari = () => {
  return (
    <div className='container mb-5 pt-5' id="Kanyakumari">
      <h3>05.Kanyakumari</h3>
      <div className='d-flex'>
      <img 
        className="distimg"
        src={require("./Home/Kanyakumari.jpeg")}
        alt="Kanyakumari">
       </img>
       <div className='disttext mt-5 ms-4 me-4 '>
        <p><b>"Cape Comorin or The Land's End"</b></p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Kanyakumari Tourism Bordered by the three seas - Arabian, Indian and the Bay of Bengal, Kanyakumari is the southernmost tip of the Indian Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was earlier known as Cape Comorin.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Kanyakumari offers the marvellous confluence of the Bay of Bengal, the Arabian Sea and the Indian ocean meeting together at a point. But, this is not a miracle, the miracle lies in the beauty that the water of three seas does not mix, you can clearly distinguish between the turquoise blue, deep blue and sea green waters of the three seas. To enjoy the best view of sunset and sunrise, you can visit the Triveni Sangam point and the famous View tower.The town has a mountainous terrain with elevated patches of hills, coconut trees and lined with paddy fields.
        </p>
       </div>
      </div> 
      <div>
        <h3 className='text-center m-5'><b>Must Visit Place In Kanyakumari</b></h3>
        <div className='card-group'>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/kanyakumari1 (1).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Kanyakumari Beach</h5>
              <p className="card-text"> Located in the southernmost part of India, Kanyakumari beach with its beautiful hue-changing beaches...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/kanyakumari1.(2).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Vivekananda Memorial </h5>
              <p className="card-text">The magnificent Vivekananda Rock Memorial is located on a small island off... </p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top border" 
              src={require("./Home/kanyakumari1.(3).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Thiruvalluvar Status</h5>
              <p className="card-text">Dedicated to the accomplished philosopher and poet Thiruvalluvar, this beautiful statue finds...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/kanyakumari1 (4).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Thirparappu Falls</h5>
              <p className="card-text">Located at a distance of about 55 kilometers from Kanyakumari, the cascading waters of the Thirparappu...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kanyakumari