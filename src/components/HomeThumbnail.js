import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import HomeSearch from './dep/HomeSearch';
import '../styles/home-thumbnail.css';
import { getCoins } from '../redux/home/Home';

export default function HomeThumbnail({
  icon,
}) {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  const background = {
    background: `rgb(93, 141, 180) url(${icon}) no-repeat top center`,
  };
  return (
    <div>
      <div className="home-coin-container">
        {coins.map((coin) => (
          <button key={coin.id} id={coin.id} type="button" style={background} className="coin-button">
            <section className="coin-button-header">
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
              {/* <h3 className="price-tag">
              Market Cap:
              <br />
              <b className="actual-price">{marketCap}</b>
            </h3>
            <h3 className="price-tag">
              Available Supply:
              <br />
              <b className="actual-price">{availableSupply}</b>
            </h3> */}
            </section>
            <p className="click-for-more">Click For More Info</p>
          </button>
        ))}
      </div>
      <section className="home-search-section">
        <HomeSearch />
      </section>
    </div>
  );
}

HomeThumbnail.propTypes = {
  // id: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // symbol: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
  // priceBtc: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};
