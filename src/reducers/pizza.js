import { PIZZA, TOPPINGS } from '../actions/pizza'

const initialState = {
  basePizza: '',
  sauce: '',
  toppings: [],
  turboDroneDelivery: false,
  price: 0
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case PIZZA:
    // console.log("state", state)
    // console.log("payload", action.payload)
      return {...state, ...action.payload}
    case TOPPINGS:
      return {...state, toppings: [...action.payload.toppings], price: state.price + action.payload.price}
    default:
      return state
  }
}