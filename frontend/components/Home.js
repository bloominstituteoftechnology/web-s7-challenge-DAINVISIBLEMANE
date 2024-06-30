import React from 'react';
import pizza from './images/pizza.jpg';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const navigateToOrder = () => {
    navigate('/order');
  };

  return (
    <div>
      <h2>
        Welcome to Bloom Pizza!
      </h2>
      <img
        alt="order-pizza"
        style={{ cursor: 'pointer' }}
        src={pizza}
        onClick={navigateToOrder} // Add this line to handle the click event
      />
    </div>
  );
}

export default Home;

