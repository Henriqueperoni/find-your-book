import React from "react";

const Book = ({ book_image, title, author }) => {
  return (
    <div className="book">
      <img src={book_image} alt={`${title}s cover`} />
      <div className="book-title">
        <h3>{title}</h3>
        <h4>{author}</h4>
      </div>
    </div>
  );
};

export default Book;
