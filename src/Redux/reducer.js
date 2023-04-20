import {ADD_TO_CART, REMOVE_FROM_CART} from './Action';
import {legacy_createStore as createStore} from 'redux';
const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};

const store = createStore(cartReducer);

export default store;
