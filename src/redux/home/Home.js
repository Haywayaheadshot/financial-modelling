import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_COINS = 'FINANCIAL-MODELLING/src/redux/home/getCoins';

const initialState = [];

const getCoinsApi = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR';

// action creators for display, join and leave missions
export const getCoins = createAsyncThunk(
  GET_COINS, () => axios.get(getCoinsApi).then((res) => {
    const coins = res.data;
    const data = Object.keys(coins).map((id) => ({
      id: coins[id][0].id,
      name: coins[id][0].name,
      symbol: coins[id][0].symbol,
      price: coins[id][0].price,
      priceBtc: coins[id][0].priceBtc,
      marketCap: coins[id][0].marketCap,
      availableSupply: coins[id][0].availableSupply,
      icon: coins[id][0].icon,
      // ...coins,
    }));
    return data;
  }),
);

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCoins.fulfilled, (_, action) => action.payload);
    builder.addCase(getCoins.rejected, (state) => {
      const newState = state;
      newState.status = 'failed';
    });
    builder.addCase(getCoins.pending, (_, action) => action.payload);
  },
});

export default coinsSlice.reducer;
