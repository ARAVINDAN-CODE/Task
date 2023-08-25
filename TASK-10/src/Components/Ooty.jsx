import React from 'react'

const Ooty = () => {
  return (
    <div className='container mb-5 pt-5' id="Ooty">
      <h3>04.Ooty</h3>
      <div className='d-flex'>
      <img 
        className="distimg"
        src={require("./Home/Ooty.jpeg")}
        alt="chennai">
       </img>
       <div className='disttext mt-5 ms-4 me-4 '>
        <p><b>"Queen of the Nilgiris"</b></p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          The Nilgiri mountain railway is the steepest track in all of Asia. Remember the hit song 'Chaiyya Chaiyya' where Shahrukh Khan and Malaika Arora matching steps on top of a train? Remember the breathtaking locales as the train chugged its way across lush greenery? Yes, that was the Nilgiri Mountain Railways, and the Nilgiri Mountains all along Dotted with tea gardens, serene waterfalls, winding country lanes, and charming colonial architecture, Ooty is the perfect respite everyone.
        </p>
       </div>
      </div> 
      <div>
        <h3 className='text-center m-5'><b>Must Visit Place In Ooty</b></h3>
        <div className='card-group'>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/ooty1 (1).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Nilgiri Mountain Railway</h5>
              <p className="card-text"> Nilgiri Mountain Railway, also known as Toy Train in Ooty, is one of the key attractions of the popular  </p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/ooty1 (2).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Ooty Botanical Garden</h5>
              <p className="card-text">Ooty Botanical Gardens lie on the lower slopes of the Doddabetta peak, the Government Botanical...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top border" 
              src={require("./Home/ooty1.(3).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Emerald Lake</h5>
              <p className="card-text">Emerald Lake is situated in Emerald Village, around 20-22 kilometres from the main city of Ooty and ...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/ooty1.(4).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Dolphin's Nose</h5>
              <p className="card-text">Located about 12 km away from Coonoor is the Dolphin's Nose about 1,500 meters above sea ...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ooty