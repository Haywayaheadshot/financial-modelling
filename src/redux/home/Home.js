import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_COINS = 'FINANCIAL-MODELLING/src/redux/home/getCoins';

const initialState = [];

const getCoinsApi = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR';

// action creators for display, join and leave missions
export const getCoins = createAsyncThunk(
  GET_COINS, () => axios.get(getCoinsApi).then((res) => {
    const { coins } = res.data;
    return coins;
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
