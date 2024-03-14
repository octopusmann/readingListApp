import { useState } from "react";
import Bookcreate  from "./components/BookCreate";
import Booklist from "./components/BookList";

function App () {

const [books, setBooks] = useState ([]); 


const createBook = (title) => {

  const updatedBooks = [
  ...books,
  {
    id: Math.round(Math.random() * 9999),
    title,
  },
];
 setBooks(updatedBooks);
};

const deleteBookById = (id) => {
  const updatedBooks = books.filter((book) => {
    return book.id !== id;
  });
  setBooks(updatedBooks);

};
  

const editBookById = (id, newTitle) => {
const updatedBooks = books.map((book) => {
  if (book.id === id)
  {
    return {...book, title:newTitle};
  }
  return book;
});

setBooks(updatedBooks);
};

return (
  <div className="app">
    <h1>Reading List</h1>
    <Booklist onEdit = {editBookById} books ={books}  onDelete = {deleteBookById} />
    <Bookcreate onCreate={createBook} />
  </div>
);


};

export default App;