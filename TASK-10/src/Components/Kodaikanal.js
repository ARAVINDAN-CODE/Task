import React from 'react'

const Kodaikanal = () => {
  return (
    <div className='container mb-5 pt-5' id="Kodaikanal">
      <h3>03.Kodaikanal</h3>
      <div className='d-flex'>
      <img 
        className="distimg"
        src={require("./Home/Kodaikanal.jpeg")}
        alt="chennai">
       </img>
       <div className='disttext mt-5 ms-4 me-4 '>
        <p><b>"The Princess of Hill Stations"</b></p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Kodaikanal Tourism Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for a perfect getaway. Kodaikanal means the gift of the forests'.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal stands at an altitude of 7200 feet above sea level, and once you visit this hill station, you will find that every bit of what you have imagined it to be is real. Kodaikanal is a place you can go to take a break from the rigours of daily city life, and this hill station lets you sit back and connect with nature as you head out on biking or trekking trails or take a stroll through the vast forests surrounding the town.
        </p>
       </div>
      </div> 
      <div>
        <h3 className='text-center m-5'><b>Must Visit Place In Kodaikanal</b></h3>
        <div className='card-group'>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/kodaikanal1....jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Green Valley View</h5>
              <p className="card-text"> Formerly known as Suicide point, the Green Valley View offers a breathtaking view of the plains, deep...  </p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/kodaikanal2.jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title"> Kodai Lake</h5>
              <p className="card-text"> Kodaikanal Lake is a manmade lake in the Kodaikanal city which is also known as Kodai Lake...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top border" 
              src={require("./Home/kodaikanal3..jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Bear Shola Falls</h5>
              <p className="card-text">Located at a mere distance of 2 kilometres from the Kodaikanal Lake, the Bear Shola Falls is a popular... </p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/kodaikanal4.jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Pillar Rocks</h5>
              <p className="card-text">Situated in the 'Princess of Hill stations', Kodaikanal, the Pillar Rocks have become a lovely picnic... </p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kodaikanal