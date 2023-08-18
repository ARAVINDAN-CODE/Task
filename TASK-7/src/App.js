import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  const backgroundImage = "/image/imag01.jpg";
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Navbar />
      
      <header className="App-header">
        <h1>Welcome to Our Restaurant</h1>
        <p>Delicious Food Served with Love</p>
        <button>View Menu</button>
      </header>
      <section className="About">
        <h2>About Us</h2>
        <p>We <b>"THE PRIME DINE RESTAURANT"</b> is one of the most popular restaurant in down south and is well known for the taste we provide.We take pride in serving the finest cuisine in a cozy atmosphere.</p>
      </section>
      <section className="Menu">
        <h2>Menu</h2>
        <div className="Menu-item">
          <h3>Appetizers</h3>
          <img  className="imager"   src="/image/img2.jpg" alt="Appetizers" />
          <p>Explore our range of mouth-watering appetizers.Our preparations are not limited only to taste but are also healthier options too.</p>
        </div>
        <div className="Menu-item">
          <h3>Main Courses</h3>
          <img className="imager" src="/image/img3.jpg" alt="Main Courses" />
          <p>From hearty entrees to exquisite delicacies.We provide popular main courses belonging to both the dishes of Kerala ,Tamil Nadu & karnataka as we need our customers to feel at home while even travelling to other states.</p>
        </div>
        <div className="Menu-item">
          <h3>Desserts</h3>
          <img className="imager" src="/image/img4.jpeg" alt="Desserts" />
          <p>Sweet treats to satisfy your cravings and also sweets are the one that make us feel completely filled ,we provide sweets that we prepare with utmost care ,it will have a perfect sweet level that you will love to have more. </p>
        </div>
      </section>
      <footer className="Footer">
        <p>&copy; 2023 Our Restaurant.</p>
      </footer>
    </div>
  );
}

export default App;
