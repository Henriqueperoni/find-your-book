import { Link } from "react-router-dom";

const Nonfiction = ({ books, isLoading }) => {
  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }

  return (
    <section className="book-container">
      {books.results.books.map((book) => {
        return (
          <Link books={books} key={book.rank} to={`/bookdetail/${book.rank}`}>
            <div className="book">
              <img src={book.book_image} alt="" />
              <div className="book-title">
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Nonfiction;
