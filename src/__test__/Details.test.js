import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import Details from '../pages/Details';
import store from '../redux/configureStore';

describe('Testing Details component', () => {
  it('Should match the snapshot Detail', () => {
    const detail = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <Details />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(detail).toMatchSnapshot();
  });
});
