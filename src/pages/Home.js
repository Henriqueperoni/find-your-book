import React from "react";
import Book from "../Components/Book";
import { Link } from "react-router-dom";
const Home = ({ nonfictionBooks, howToBooks, isLoading }) => {
  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }
  return (
    <div className="container">
      <h2>Nonfiction Best Sellers</h2>
      <section className="book-container">
        {nonfictionBooks.results.books.map((book) => {
          return (
            <Link
              style={{ textDecoration: "none", color: "#0f0f0f" }}
              books={nonfictionBooks}
              key={book.rank}
              to={`/bookdetail/${book.rank}`}
            >
              <Book {...book} />
            </Link>
          );
        })}
      </section>
      <h2>How To Best Sellers</h2>
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
    </div>
  );
};

export default Home;
