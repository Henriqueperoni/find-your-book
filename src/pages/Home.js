import React from "react";
import Book from "../Components/Book";
import NextPrev from "../Components/NextPrev";
import { Link } from "react-router-dom";

const Home = ({
  businessBooks,
  howToBooks,
  isLoading,
  month,
  setMonth,
  year,
  setYear,
  currentMonth,
}) => {
  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }

  return (
    <div className="container">
      <h1>New York Time Best Sellers</h1>
      <NextPrev
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        currentMonth={currentMonth}
      />
      <h2>Nonfiction Best Sellers</h2>
      <section className="book-container">
        {businessBooks.results.books.map((book) => {
          return (
            <Link
              style={{ textDecoration: "none", color: "#0f0f0f" }}
              books={businessBooks}
              key={book.rank}
              to={`/bookdetail/${book.rank}`}
            >
              <Book {...book} />
            </Link>
          );
        })}
      </section>
      <NextPrev
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        currentMonth={currentMonth}
      />
      <h2>Advice, How-To & Miscellaneous</h2>
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
