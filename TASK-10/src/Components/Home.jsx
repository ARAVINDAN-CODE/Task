import React from 'react'
import Carousel from './Carousel'
import Chennai from './Chennai';
import Kodaikanal from './Kodaikanal';
import Madurai from './Madurai';
import Kumbakonam from './Kumbakonam';
import Theni from './Theni';
import Rameshwaram from './Rameshwaram';
import Ooty from './Ooty';
import Kanyakumari from './Kanyakumari';
import Yercaud from './Yercaud';
import Hogenakkal from './Hogenakkal';
import Cityroute from './Cityroute';

const Home = () => {
  return (

    <div>
      <Carousel />
      <Cityroute />
      <Chennai />
      <Rameshwaram />
      <Kodaikanal />
      <Ooty />
      <Kanyakumari />
      <Kumbakonam />
      <Madurai />
      <Yercaud />
      <Theni />
      <Hogenakkal />
    </div>
  )
}

export default Home