import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from '../redux/home/Home';
import '../styles/details.css';

export default function Details() {
  const params = useParams();
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins());
  }, []);
  const filteredCoin = coins.filter((coin) => (coin.id === params.id));
  return (
    <div className="details-container">
      <NavLink to="../">
        <button className="back-button" type="button">Back</button>
      </NavLink>
      { filteredCoin.map((coin) => (
        <section className="detail-mapped-container" key={coin.id} id={coin.id}>
          <div>
            <h1 className="header-details-key">
              {coin.name}
              /
              {coin.symbol}
            </h1>
            <section className="coin-rank-container">
              <h2 className="header-details-key">Coin Rank:</h2>
              <h1 className="header-details-value">{coin.rank}</h1>
            </section>
          </div>
          <table>
            <tbody className="details-column-data-body">
              <tr>
                <td className="details-column-data">Price Against USD</td>
                <td className="details-column-data">{coin.price}</td>
              </tr>
              <tr>
                <td className="details-column-data">Price Against BTC</td>
                <td className="details-column-data">{coin.priceBtc}</td>
              </tr>
              <tr>
                <td className="details-column-data">Volume</td>
                <td className="details-column-data">{coin.volume}</td>
              </tr>
              <tr>
                <td className="details-column-data">Market Cap</td>
                <td className="details-column-data">{coin.marketCap}</td>
              </tr>
              <tr>
                <td className="details-column-data">Available Supply</td>
                <td className="details-column-data">{coin.availableSupply}</td>
              </tr>
              <tr>
                <td className="details-column-data">Total Supply</td>
                <td className="details-column-data">{coin.totalSupply}</td>
              </tr>
              <tr>
                <td className="details-column-data">Price Change(1h)</td>
                <td className="details-column-data">{coin.priceChange1h}</td>
              </tr>
              <tr>
                <td className="details-column-data">Price Change(1D)</td>
                <td className="details-column-data">{coin.priceChange1d}</td>
              </tr>
              <tr>
                <td className="details-column-data">Price Change(1W)</td>
                <td className="details-column-data">{coin.priceChange1w}</td>
              </tr>
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
}
