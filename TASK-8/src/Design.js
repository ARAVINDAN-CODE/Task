import React from 'react'

const BookIt = () => {
  return (
    <div>
      <img src={require("./img/img1.jpeg" )} alt="bike1img" height="1000vh" width="1350vw"/>
      <img src={require("./img/img2.jpg" )} alt="bike2img" height="1000vh" width="1350vw"/><br />
      <img src={require("./img/img4.jpg" )} alt="bike3img" height="1000vh" width="1350vw"/>
      <img src={require("./img/img5.jpg" )} alt="bike4img" height="1000vh" width="1350vw"/>
    </div>
  )
}

export default BookIt