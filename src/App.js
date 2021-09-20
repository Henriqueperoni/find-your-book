import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";

const url = `https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=${process.env.REACT_APP_BOOK_API_KEY}`;

function App() {
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

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home books={books} isLoading={isLoading} />
        </Route>
        <Route path="/bookdetail/:id">
          <BookDetail books={books} isLoading={isLoading} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
