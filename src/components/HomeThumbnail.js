import React from 'react';
import PropTypes from 'prop-types';
import HomeSearch from './dep/HomeSearch';
import '../styles/home-thumbnail.css';

export default function HomeThumbnail({
  id, name, symbol, icon, price, priceBtc,
}) {
  const background = {
    background: `rgb(93, 141, 180) url(${icon}) no-repeat top center`,
  };
  return (
    <div>
      <div className="home-coin-container">
        <button id={id} type="button" style={background} className="coin-button">
          <section className="coin-button-header">
            <h3 className="header-price">{name}</h3>
            <h3>{symbol}</h3>
          </section>
          <section>
            <h3 className="price-tag">
              Price Against USD:
              <br />
              <b className="actual-price">{price}</b>
            </h3>
            <h3 className="price-tag">
              Price Against BTC:
              <br />
              <b className="actual-price">{priceBtc}</b>
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
      </div>
      <section className="home-search-section">
        <HomeSearch />
      </section>
    </div>
  );
}

HomeThumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceBtc: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};
