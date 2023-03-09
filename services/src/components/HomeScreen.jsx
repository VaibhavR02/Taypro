import React from 'react';
import { Link } from 'react-router-dom';
import product from '../API/Product';
import '../styles/HomeScreen.css';
const HomeScreen = () => {
  return (
    <>
      <div className="home">
        <div className="left">
          <iframe
            width="730"
            height="414"
            src="https://www.youtube.com/embed/fFrfVfyvPaE"
            title="How automatic solar panel cleaning robot work - Explained | Taypro"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="right">
          <h1>OPTIMIZE SOLAR ENERGY PRODUCTION</h1>
          <p>with TAYPRO's Best Solar Panel Cleaning Robots</p>
          <button className="btn">
            {' '}
            <Link to="https://taypro.in/" target="_blank">
              Learn More
            </Link>{' '}
          </button>
        </div>
      </div>

      <div className="product">
        {product.map((item, index) => (
          <div key={index} className="card">
            <img src={item.imgsrc} alt={item.heading} />
            <div className="container1">
              <h4>
                <b>{item.heading}</b>
              </h4>
              <p>{item.desc}</p>
              <button className="btn2">Learn More </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
