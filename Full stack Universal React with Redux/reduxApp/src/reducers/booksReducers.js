"use strict"

//BOOKS reducers
export function booksReducers(state={
  books: []
}, action) {
  switch(action.type) {
    case "GET_BOOKS":
    return {...state, books:[...action.payload]}
    break;
    case "POST_BOOK":
    //let books = state.books.concat(action.payload)
    //return {books}
    return {books:[...state.books, ...action.payload]}
    break;
    case "DELETE_BOOK":
      //Create a copy of the current array of books
      const currentBookToDelete = [...state.books]
      // Determin at which index in books array is the book to be deleted
      const indexToDelete = currentBookToDelete.findIndex(
        function(book) {
          return book._id.toString() === action.payload;
          //return book._id == action.payload;
        }
      )
      //use slice to remove the book at the specified indexToDelete
      return {books: [...currentBookToDelete.slice(0, indexToDelete),
        ...currentBookToDelete.slice(indexToDelete + 1)]}
        break;
        case "UPDATE_BOOK":
        //Create a copy of current array of books
        const currentBookToUpdate = [...state.books]
        // Determin at which index in books array is the book to UPDATE
        const indexToUpdate =
          currentBookToUpdate.findIndex(
              function(book){
                return book._id === action.payload._id;
              }
        )
        //Create a new book object with the new values and with the same aray index of the idem we want to replace. To achive this we will use ...spread but we could use concat mwthods too
        //this needs stage-1 in babel
        const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
        }
        //useslice  to remove the book at the specified index, replace with the new object and concatenate with the rest of items in the array

        return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate +1)]}
        break;
      }
  return state
}
