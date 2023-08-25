import React from 'react'

const Theni = () => {
  return (
    <div className='container mb-5 pt-5' id="Theni">
      <h3>09.Theni</h3>
      <div className='d-flex'>
      <img 
        className="distimg"
        src={require("./Home/Theni.jpeg")}
        alt="Theni">
       </img>
       <div className='disttext mt-5 ms-4 me-4 '>
        <p><b>"A little hamlet in Tamil Nadu"</b></p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Theni Tourism Dotted by luscious patches of greenery and beautiful waterfalls, Theni is a little hamlet on the Western Ghats. The topography of Theni mainly consists of hills and ranges. It has plenty of rivers and dams and is an abode to 27 forests hence filled with unparalleled greenery.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          There temples like Kamatchi Amman Temple, Vellappar Temple, and Balasubramanya Temple which are brimming with devotees from all around the country throughout the year. The vibrant local markets of Theni are shoppers' paradise. The local handloom products and agricultural products are the best buys at these markets. The aroma filled tea estates in Theni are a paradise. The Kolukkamalai Tea estate is often deemed to be the world's highest organic tea estate. The Suruli Falls and the Kumbakarai Falls are the crown jewels of Theni.
        </p>
       </div>
      </div> 
      <div>
        <h3 className='text-center m-5'><b>Must Visit Place In Theni</b></h3>
        <div className='card-group'>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/theni1.(1).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Chinna Suruli Falls</h5>
              <p className="card-text">Located in the lap of wild, green forests, Chinna Suruli Falls is a picturesque destination to visit from Theni...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/theni1 (2).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Kumbakkarai Falls</h5>
              <p className="card-text"> Located in Dindigul district near Theni in Tamil Nadu, Kumbakkarai Falls is a mesmerising waterfall that...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top border" 
              src={require("./Home/theni1.(3).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Meghamalai</h5>
              <p className="card-text">Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni district is the kind of hidden paradise...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
          <div className="card m-2 border rounded-lg">
          <img 
              className="card-img-top" 
              src={require("./Home/theni1.(4).jpeg")} 
              alt="card_img.jpg"/>
            <div className="card-body">
              <h5 className="card-title">Suruli Falls</h5>
              <p className="card-text">Suruli Falls is a beautiful waterfall in the Theni district of Tamil Nadu and one of the major tourist attractions of...</p>
              <a href="#" className="btn btn-primary">Read More</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Theni