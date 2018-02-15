"use strict"

//BOOKS reducers
export function booksReducers(state={
  books:
    [{
      _id: 1,
      title: 'Book one',
      description: 'this is the book description',
      price: 33.33
    },
    {
      _id: 2,
      title: 'Book two',
      description: 'this is the second book description',
      price: 50.95
    },
    {
      _id: 3,
      title: 'Book Three',
      description: 'this is the third book description',
      price: 70.50
    },
    {
      _id: 4,
      title: 'Book four',
      description: 'this is the third book description',
      price: 90.00
    },
    {
      _id: 5,
      title: 'Book five',
      description: 'this is the third book description',
      price: 100.00
    },
    {
      _id: 6,
      title: 'Gradlon\'s Favorite Book',
      description: 'One of the bestbooks you can buy',
      price: 150.00
    }
  ]
}, action) {
  switch(action.type) {
    case "GET_BOOKS":
    return {...state, books:[...state.books]}
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
