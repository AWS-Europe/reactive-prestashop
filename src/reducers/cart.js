import {
  FETCH_CART_DATA, CART_DATA_REQUEST, CART_ITEM_DATA_REQUEST
} from '../constants/cart'

const initState = {
  cart_id: null,
  data: null,
  cartItems: []
}

export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_CART_DATA:
      return {
        ...state,
        ...action.payload
      }
    case CART_DATA_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    case CART_ITEM_DATA_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}