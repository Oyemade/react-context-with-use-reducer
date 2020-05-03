import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

import BookDetails from "../components/BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <BookDetails key={book.id} book={book} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">
      No books to read <span role="img">👀</span>
    </div>
  );
};

export default BookList;
