import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeThumbnail from '../components/HomeThumbnail';
import { getCoins } from '../redux/home/Home';

export default function Home() {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  const openMoreHandler = () => {
    console.log('navigate to details with this id');
  };
  return (
    <div>
      { coins.map((coin) => (
        <HomeThumbnail
          onClick={openMoreHandler}
          key={coin.id}
          id={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          price={coin.price}
          priceBtc={coin.priceBtc}
          marketCap={coin.marketCap}
          availableSupply={coin.availableSupply}
          icon={coin.icon}
        />
      ))}
    </div>
  );
}
