"use strict"

//CART Reducers
export function cartReducers(state={cart:[]}, action) {
  switch(action.type){
    case "ADD_TO_CART":
    return {
      cart:[...state, ...action.payload],
      totalAmount: totals(action.payload).amount,
      totalQty: totals(action.payload).qty
    }
    break;
    case "DELETE_CART_ITEM":
    return {
      cart:[...state, ...action.payload],
      totalAmount: totals(action.payload).amount,
      totalQty: totals(action.payload).qty
    }
    break;
    case "UPDATE_CART":
    //Create a copy of current array of books
    const currentBookToUpdate = [...state.cart]
    // Determin at which index in books array is the book to UPDATE
    const indexToUpdate =
      currentBookToUpdate.findIndex(
          function(book){
            return book._id === action._id;
          }
    )
    //this needs stage-1 in babel
    const newBookToUpdate = {
    ...currentBookToUpdate[indexToUpdate],
    quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
      }
    let cartUpdate = [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate +1)]
    return {
      ...state,
      cart:cartUpdate,
      totalAmount: totals(cartUpdate).amount,
      totalQty: totals(cartUpdate).qty
    }
    break;
  }
  return state
}

// CALCULATE TOTAL
export function totals(payloadArr) {

  const totalAmount = payloadArr.map(function(cartArr){
    return cartArr.price * cartArr.quantity;
  }).reduce(function(a, b){
    return a + b
  }, 0) //start summing from index0

  const totalQty = payloadArr.map(function(qty) {
    return qty.quantity;
  }).reduce(function(a, b) {
    return a + b;
  }, 0);

  return {amount:totalAmount.toFixed(2), qty:totalQty}
}
