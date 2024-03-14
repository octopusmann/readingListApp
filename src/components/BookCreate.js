import { useState } from "react";
function Bookcreate ({onCreate}) {

    const [title, setTitle] = useState();

    const handleChange = (event) => {

        setTitle (event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }


return (
    <div className="book-create">
        <h3>Add a book</h3>
        <form onSubmit={handleSubmit} >
        <input className="input" value={title} onChange={handleChange}  ></input>
        <button className="button" >Submit</button>
        </form>
    </div>

);
};

export default Bookcreate;