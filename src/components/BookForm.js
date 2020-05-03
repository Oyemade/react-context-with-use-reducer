import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", title, author });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={author}
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="Ädd Book" />
    </form>
  );
};

export default BookForm;
