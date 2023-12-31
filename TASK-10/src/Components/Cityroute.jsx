import React from 'react'
import Chennai from './Chennai'
import Kodaikanal from './Kodaikanal'
import Madurai from './Madurai'
import Kumbakonam from './Kumbakonam'
import Theni from './Theni'
import Rameshwaram from './Rameshwaram'
import Ooty from './Ooty'
import Kanyakumari from './Kanyakumari'
import Yercaud from './Yercaud'
import Hogenakkal from './Hogenakkal'
const Cityroute = () => {
  return (
    <div className='container text-center'>
        <section className='row row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2'>
            <a className='col nav-link text-primary' href='#Chennai'><b>Chennai</b></a>
            <a className='col nav-link text-primary' href='#Kodaikanal'><b>Kodaikanal</b></a>
            <a className='col nav-link text-primary' href='#Madurai'><b>Madurai</b></a>
            <a className='col nav-link text-primary' href='#Kumbakonam'><b>Kumbakonam</b></a>
            <a className='col nav-link text-primary' href='#Theni'><b>Theni</b></a>
            <a className='col nav-link text-primary' href='#Rameshwaram'><b>Rameshwaram</b></a>
            <a className='col nav-link text-primary' href='#Ooty'><b>Ooty</b></a>
            <a className='col nav-link text-primary' href='#Kanyakumari'><b>Kanyakumari</b></a>
            <a className='col nav-link text-primary' href='#Yercaud'><b>Yercaud</b></a>
            <a className='col nav-link text-primary' href='#Hogenakkal'><b>Hogenakkal</b></a>
        </section>
             
    </div>
  )
}

export default Cityroute