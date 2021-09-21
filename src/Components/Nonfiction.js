import { Link } from "react-router-dom";
import Book from "./Book";

const Nonfiction = ({ nonfictionBooks, isLoading }) => {
  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }

  return (
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
  );
};

export default Nonfiction;
