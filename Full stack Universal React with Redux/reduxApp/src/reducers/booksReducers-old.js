"use strict"

//STEP 3 define reducers
const reducer = function(state={books:[]}, action) {
  switch(action.type) {
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
          return book._id === action.payload._id
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
        console.log("index to update" , indexToUpdate)
        //Create a new book object with the new values and with the same aray index of the idem we want to replace. To achive this we will use ...spread but we could use concat mwthods too
        //this needs stage-1 in babel
        const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
        }
        const test= {...currentBookToUpdate[1], title:"TEST"}
        console.log("TEST: ", test);
        //this log has the purpose to show you how newBookToUpdate look like
        console.log("Waht is it newBookToUpdate: ", newBookToUpdate);
        //useslice  to remove the book at the specified index, replace with the new object and concatenate with the rest of items in the array
        var test = [...currentBookToUpdate.slice(1, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate +1)]
        console.log("current book to update: ", currentBookToUpdate)
        console.log("scliced BookS: ", test)
        ///
        return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate +1)]}
        break;
      }
  return state
}


// STEP 1 create the Store
const store = createStore(reducer);
store.subscribe(function() {
  console.log('current state is: ', store.getState());
  //console.log('current state is: ', store.getState()[0].price);
  //console.log('current state is: ', store.getState()[1].description);
})
