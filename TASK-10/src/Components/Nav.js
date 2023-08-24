import React from 'react';
import '../App.css';
const Navbar = () => {
  return (
    <header >
      <nav className='navbar navbar-expand-sm'>
        <div className='container'>
          <a className='navbar-brand text-white'><b>TAMILNADU TOURISM</b></a> 
          <ul className='navbar-nav'>
            <a className='nav-link text-white' href=""><b>Home</b></a>
            <a className='nav-link text-white' href=""><b>PlaceToVisit</b></a>
            <a className='nav-link text-white' href=""><b>BestTimeToVisit</b></a>
            <a className='nav-link text-white' href=""><b>Packages</b></a>
            <a className='nav-link text-white' href=""><b>Destination</b></a>
            <a className='nav-link text-white' href=""><b>Food</b></a>
          </ul>
        </div>
      </nav>
    </header>
    
  )
}

export default Navbar;