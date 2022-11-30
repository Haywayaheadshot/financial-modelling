import { render, screen } from '@testing-library/react';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Details from '../pages/Details';
import '@testing-library/jest-dom';

describe('Testing Home page', () => {
  it('Should match the snapshot', () => {
    const home = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <Home />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(home).toMatchSnapshot();
  });

  // it('Should have text Bitcoin', () => {
  //   render(
  //     <Provider store={store}>
  //       <Router>
  //         <Home />
  //       </Router>
  //     </Provider>,
  //   );
  //   expect(screen.getByText('Bitcoin')).toBeInTheDocument();
  // });

  it('Should have text Ethereum', () => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
  });
});

describe('Testing Contacts page', () => {
  it('Should match the companies snap', () => {
    const contact = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <Contact />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(contact).toMatchSnapshot();
  });
});

describe('Testing Details page', () => {
  it('Should match the details snap', () => {
    const details = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <Details />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(details).toMatchSnapshot();
  });
});
