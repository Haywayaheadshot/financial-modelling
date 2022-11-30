import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from '../redux/home/Home';

export default function Details() {
  const params = useParams();
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins());
  }, []);
  const filteredCoin = coins.filter((coin) => (coin.id === params.id));
  return (
    <div>
      <NavLink to="../">
        <button type="button">Back</button>
      </NavLink>
      { filteredCoin.map((coin) => (
        <section key={coin.id} id={coin.id}>
          <div>
            <h1>
              {coin.name}
              /BTC
            </h1>
            <h2>Rank</h2>
          </div>
          <table>
            <tbody>
              <tr>
                <td className="column-data">{`Total Supply: ${coin.totalSupply}`}</td>
                <td className="column-data">102220</td>
              </tr>
              <tr>
                <td className="column-data">Price Against BTC</td>
                <td className="column-data">102220</td>
              </tr>
              <tr>
                <td className="column-data">Volume</td>
                <td className="column-data">102220</td>
              </tr>
              <tr>
                <td className="column-data">Market Cap</td>
                <td className="column-data">102220</td>
              </tr>
              <tr>
                <td className="column-data">Available Supply</td>
                <td className="column-data">102220</td>
              </tr>
              <tr>
                <td className="column-data">Total Supply</td>
                <td className="column-data">102220</td>
              </tr>
              <tr>
                <td className="column-data">Hourly Price Change</td>
                <td className="column-data">102220</td>
              </tr>
              <tr>
                <td className="column-data">Weekly Price Change</td>
                <td className="column-data">102220</td>
              </tr>
              <tr>
                <td className="column-data">Daily Price Change</td>
                <td className="column-data">102220</td>
              </tr>
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
}
