import React from 'react'

const Chennai = () => {
  return (
    <div className='container mb-5' id="chennai">
      <h3>01.Chennai</h3>
      <div className='d-flex'>
      <img 
        className="distimg"
        src={require("./Home/Chennai.jpeg")}
        alt="chennai">
       </img>
       <div className='disttext mt-5 ms-4 me-4 '>
        <p><b>"The Detroit Of India"</b></p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Formerly known as Madras,Chennai is the capital city of the state of
          Tamil Nadu, in the southern part of India. Located on the Coromandel coast
          of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This
          'capital of the south', is one among the four metropolitan siblings of India,
          having a rich cultural history which it perfectly balances with its metropolis
          lifestyle.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Amid its chaos of traffic and sweltering humid climate, Chennai is
          worth visiting for its temples steeped in south-Indian culture, British-era
          museums and monuments, culinary delights and Marina Beach (Second
          largest urban beach in the world). Chennai's skyline is famous for its towering
          skyscrapers, but the heart of Chennai has an old-world charm to it that
          refuses to be overshadowed.
        </p>
       </div>
      </div> 
      <div>
        <h3 className='text-center m-5'><b>Must Visit Place In Chennai</b></h3>
        <div className='card-group'>
          <div className="card m-2">
          <img 
              className="card-img-top" 
              src={require("./Home/chennai1.jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Marina Beach</h5>
              <p className="card-text"> Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal... </p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border">
          <img 
              className="card-img-top" 
              src={require("./Home/chennai2.jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">MGR Flim City</h5>
              <p className="card-text">Having been established in the year 1994, a considerably new structure, the MGR Film city is managed...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border">
          <img 
              className="card-img-top border" 
              src={require("./Home/chennai3...jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Marundeeswarar Temple</h5>
              <p className="card-text">The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border">
          <img 
              className="card-img-top" 
              src={require("./Home/chennai4.jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Breezy Beach</h5>
              <p className="card-text">Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar in Chennai. Being smaller and less polluted... </p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chennai