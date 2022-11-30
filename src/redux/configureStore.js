import { configureStore } from '@reduxjs/toolkit';
import coinsSlice from './home/Home';

const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    coins: coinsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
