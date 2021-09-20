import { useState, useEffect } from "react";

const url = `https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=${process.env.REACT_APP_BOOK_API_KEY}`;
const Books = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBooks = async () => {
    const response = await fetch(url);
    const newBooks = await response.json();
    setBooks(newBooks);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }

  return (
    <div>
      {books.results.books.map((book) => {
        return (
          <div key={book.rank}>
            <h1>{book.title}</h1>
            <img src={book.book_image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Books;
