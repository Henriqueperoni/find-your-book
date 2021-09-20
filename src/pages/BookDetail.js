import React from "react";
import { useParams } from "react-router-dom";

const BookDetail = ({ books }) => {
  const { id } = useParams();

  const getBook = books.results.books.filter(
    (book) => book.rank === parseInt(id)
  );
  const { rank, title, author, book_image, description, buy_links } =
    getBook[0];
  return (
    <div className="book-detail">
      <div className="book-detail-img">
        <img src={book_image} alt={`${title}'s cover'`} />
      </div>
      <div className="book-detail-desc">
        <h1>{title}</h1>
        <h3>{author}</h3>
        <p>Rank Position: {rank}</p>
        <p>{description}</p>
        <div className="buy-btn-container">
          {buy_links.map((link, index) => {
            return (
              <a className="buy-btn" key={index} href={link.url}>
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
