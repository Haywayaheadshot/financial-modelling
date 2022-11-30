import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../styles/home-thumbnail.css';
import { getCoins } from '../redux/home/Home';

export default function HomeThumbnail() {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  return (
    <div className="home-coin-container">
      {coins.map((coin) => (
        <NavLink key={coin.id} to={`/${coin.id}`}>
          <button key={coin.id} id={coin.id} type="button" className="coin-button">
            <section className="coin-button-header">
              <img className="coin-logo" src={coin.icon} alt="Coin Logo" />
              <h3 className="header-price">{coin.name}</h3>
              <h3>{coin.symbol}</h3>
            </section>
            <section>
              <h3 className="price-tag">
                Price Against USD:
                <br />
                <b className="actual-price">{coin.price}</b>
              </h3>
              <h3 className="price-tag">
                Price Against BTC:
                <br />
                <b className="actual-price">{coin.priceBtc}</b>
              </h3>
            </section>
            <p className="click-for-more">Click For More Info</p>
          </button>
        </NavLink>
      ))}
    </div>
  );
}
