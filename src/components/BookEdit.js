import { useState } from "react";
function BookEdit ({book, onEdit,onSubmit})
{
    const [title, setTitle] = useState(book.title); 
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        onEdit(book.id,title);


    }

    const handleChange = (event) => {
        setTitle(event.target.value);
    }


return <form onSubmit={handleSubmit} className="book-edit" >
    <label>Title </label>
    <input value={title} onChange={handleChange} className="input" />
    <button className="button"> Save </button>
    
    
     </form>


};

export default BookEdit;