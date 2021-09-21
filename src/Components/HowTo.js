import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const HowTo = ({ howToBooks, isLoading }) => {
  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }
  return (
    <section className="book-container">
      {howToBooks.results.books.map((book) => {
        return (
          <Link
            style={{ textDecoration: "none", color: "#0f0f0f" }}
            books={howToBooks}
            key={book.rank}
            to={`/bookdetail1/${book.rank}`}
          >
            <Book {...book} />
          </Link>
        );
      })}
    </section>
  );
};

export default HowTo;
