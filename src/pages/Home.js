import React from "react";
import { Link } from "react-router-dom";
import Book from "../Components/Book";
import Loading from "../Components/Loading";
import NextPrev from "../Components/NextPrev";
import { useGlobalContext } from "../context";

const Home = () => {
  const { businessBooks, howToBooks, isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <h1>New York Time Best Sellers</h1>
      <NextPrev />
      <h2>Nonfiction Best Sellers</h2>
      <section className="book-container">
        {businessBooks.results.books.map((book) => {
          return (
            <Link
              style={{ textDecoration: "none", color: "#0f0f0f" }}
              key={book.rank}
              to={`/bookdetail/${book.rank}`}
            >
              <Book {...book} />
            </Link>
          );
        })}
      </section>
      <NextPrev />
      <h2>Advice, How-To & Miscellaneous</h2>
      <section className="book-container">
        {howToBooks.results.books.map((book) => {
          return (
            <Link
              style={{ textDecoration: "none", color: "#0f0f0f" }}
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
