export const PIZZA = 'ORDER_PIZZA'
export const TOPPINGS = 'TOPPINGS'

export function pizza(pizza) {
    return {
      type: PIZZA,
      payload: {...pizza}
    }
}

export function toppings(toppings) {
  return {
    type: TOPPINGS,
    payload: {...toppings}
  }
}