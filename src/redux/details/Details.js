const ADD_DETAILS = 'FINANCIAL-MODELLING/src/redux/details/addDetails';

export const addDetails = () => (
    {
      type: ADD_DETAILS,
      payload: test,
    }
);

export default function booksReducer(state = [], action) {
    switch (action.type) {
      case ADD_DETAILS:
        return state.filter((coin) => coin.id === action.payload);
      default:
        return state;
    }
  }
