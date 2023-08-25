import React from 'react'

const Yercaud = () => {
  return (
    <div className='container mb-5 pt-5' id="Yercaud">
      <h3>08.Yercaud</h3>
      <div className='d-flex'>
      <img 
        className="distimg"
        src={require("./Home/Yarcaud.jpeg")}
        alt="Yercaud">
       </img>
       <div className='disttext mt-5 ms-4 me-4 '>
        <p><b>"The Land of Seven Forests."</b></p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud is a hill station in the Eastern Ghats steeped in abundant greenery. Commonly called 'Ooty of the Poor', this region has a history dating back to the time of the British. Located at an altitude of 4970 feet, Yercaud is known for its vast expanses of coffee plantations and great weather.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Yercaud lake is the main point of attraction of the region.One of the many highlights is the summer festival that takes place in May. It is dedicated to Lord Servarayan, the supreme god of the ranges and gives visitors a glimpse into the rich heritage of this region.
        </p>
       </div>
      </div> 
      <div>
        <h3 className='text-center m-5'><b>Must Visit Place In Yercaud</b></h3>
        <div className='card-group'>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/yercaud...(1).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Pagoda Point</h5>
              <p className="card-text">Located in the eastern part of the Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated ...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/yercaud1 (2).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Botanical Garden</h5>
              <p className="card-text"> Any tourist who is interested in gods gift to this planet, the wondrous flora, and in knowing about various...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top border" 
              src={require("./Home/yercaud1.(3).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Emerald Lake</h5>
              <p className="card-text">The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/yercaud1.(4).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Lady's Seat</h5>
              <p className="card-text">Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Yercaud