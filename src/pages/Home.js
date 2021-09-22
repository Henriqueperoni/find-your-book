import React from "react";
import Book from "../Components/Book";
import { Link } from "react-router-dom";

const Home = ({
  businessBooks,
  howToBooks,
  isLoading,
  month,
  setMonth,
  year,
  setYear,
}) => {
  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const decresaseMonth = () => {
    console.log(`function ${month}`);
    if (month <= 1) {
      return setYear(year - 1), setMonth(12);
    }
    setMonth(month - 1);
  };
  console.log(month);
  console.log(year);

  return (
    <div className="container">
      <button onClick={() => decresaseMonth()}>Decrease</button>
      {monthNames[month - 1]} - {year}
      <button onClick={() => setMonth(month + 1)}>Increase</button>
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
