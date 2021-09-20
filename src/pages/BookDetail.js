import React from "react";
import { useParams } from "react-router-dom";

const BookDetail = ({ books }) => {
  const { id } = useParams();

  const getBook = books.results.books.filter(
    (book) => book.rank === parseInt(id)
  );
  console.log(getBook);
  const { rank, title, author } = getBook[0];
  console.log(rank);
  return (
    <div>
      <h1>Book Detail Page</h1>
      {title}
    </div>
  );
};

export default BookDetail;
