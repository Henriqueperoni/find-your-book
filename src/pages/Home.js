import React from "react";
import Book from "../Components/Book";
import { Link } from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

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

  const incresaseMonth = () => {
    if (month === parseInt(currentMonth)) {
      return setMonth(parseInt(currentMonth));
    }
    if (month === 12) {
      return setYear(year + 1), setMonth(1);
    }
    setMonth(month + 1);
  };

  const decresaseMonth = () => {
    if (month <= 1) {
      return setYear(year - 1), setMonth(12);
    }
    setMonth(month - 1);
  };

  return (
    <div className="container">
      <div className="date">
        <button className="next-prev-btn" onClick={() => decresaseMonth()}>
          <FiChevronLeft />
        </button>
        <p>
          {monthNames[month - 1]} - {year}
        </p>
        <button className="next-prev-btn" onClick={() => incresaseMonth()}>
          <FiChevronRight />
        </button>
      </div>
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
