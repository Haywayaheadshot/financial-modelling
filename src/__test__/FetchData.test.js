import coinsSlice, { getCoins } from '../redux/home/Home';

describe('Testing defined reducers', () => {
  const previousState = [];
  it('Should details page to be defined', () => {
    expect(coinsSlice(previousState, getCoins())).toBeDefined();
  });
});
