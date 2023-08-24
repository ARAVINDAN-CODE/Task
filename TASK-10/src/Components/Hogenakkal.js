import React from 'react'

const Hogenakkal = () => {
  return (
    <div className='container mb-5 pt-5' id="Hogenakkal">
      <h3>10.Hogenakkal</h3>
      <div className='d-flex'>
      <img 
        className="distimg"
        src={require("./Home/Hogenakkal.jpeg")}
        alt="Hogenakkal">
       </img>
       <div className='disttext mt-5 ms-4 me-4 '>
        <p><b>"The one that will take your breath away"</b></p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri district of Tamil Nadu where the Kaveri river splits into multiple streams of waterfalls. Located at a distance of 180 km from Bangalore, Hogenakkal has water throughout the year. The carbonite rocks, the coracle (basket boat) rides, freshwater fish, oil massages by locals make it a perfect one day trip or a weekend getaway from Bangalore.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Sometimes referred to as the "Niagara Falls of India," it is also known for the medicinal baths. Also known at Marikottayam, Hoge actually means smoke and Kal means rock. Recently, the place has been found to be littered with plastic bags and garbage and the fish market outside the waterfall might stink. Weekends can be crowded. Keep all these points in mind before visiting.
        </p>
       </div>
      </div> 
      <div>
        <h3 className='text-center m-5'><b>Must Visit Place In Hogenakkal</b></h3>
        <div className='card-group'>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/hogenakkal1.jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Theerthamalai Temple</h5>
              <p className="card-text">Theerthamalai is a popular pilgrim centre close to Hogenakkal. One of its most popular ...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/hogenakkal2..jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Hogenakkal Falls</h5>
              <p className="card-text"> Hogenakkal Falls is a scintillating waterfall that is located on river Kaveri in the Dharmapuri district of the...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top border" 
              src={require("./Home/hogenakkal3.jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Pennagram Village</h5>
              <p className="card-text">The village is located about 20 km away from Hogenakkal and is famous for its weekly fair that it holds every...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/hokenakkal4..jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Mettur Dam</h5>
              <p className="card-text">Mettur Dam, situated 30 miles from Salem in a small Mettur Village, is one of the largest dams in India. Built...attractions of...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hogenakkal