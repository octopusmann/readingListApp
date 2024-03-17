import { useState,useEffect } from "react";
import Bookcreate  from "./components/BookCreate";
import Booklist from "./components/BookList";
import axios from 'axios';

function App () {

const [books, setBooks] = useState ([]); 

const fetchbook = async () => {
  const response = await axios.get('http://localhost:3000/books');
  setBooks(response.data);
}
useEffect (() => {
  fetchbook();
})
const createBook = async (title) => {
 const response = await axios.post('http://localhost:3000/books',{title});


  const updatedBooks = [ ...books, response.data];
 setBooks(updatedBooks);
};

const deleteBookById = async (id) => {
  await axios.delete(`http://localhost:3000/books/${id}`);
  const updatedBooks = books.filter((book) => {
    return book.id !== id;
  });
  setBooks(updatedBooks);

};
  

const editBookById = async (id, newTitle) => {

const response = await axios.put(`http://localhost:3001/books/${id}`,{title: newTitle})

const updatedBooks = books.map((book) => {
  if (book.id === id)
  {
    return {...book, ...response.data};
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