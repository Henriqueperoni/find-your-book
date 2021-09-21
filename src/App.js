import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./Components/Error";
import BookDetail from "./pages/BookDetail";
import Navbar from "./Components/Navbar";

const NonfictionUrl = `https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=${process.env.REACT_APP_BOOK_API_KEY}`;
const howToUrl = `https://api.nytimes.com/svc/books/v3/lists/current/advice-how-to-and-miscellaneous.json?api-key=${process.env.REACT_APP_BOOK_API_KEY}`;

function App() {
  const [nonfictionBooks, setNonfictionBooks] = useState([]);
  const [howToBooks, setHowToBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNonfictionBooks = async () => {
    const response = await fetch(NonfictionUrl);
    const newBooks = await response.json();
    setNonfictionBooks(newBooks);
    const response1 = await fetch(howToUrl);
    const newBooks1 = await response1.json();
    setHowToBooks(newBooks1);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchNonfictionBooks();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home
            nonfictionBooks={nonfictionBooks}
            howToBooks={howToBooks}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/bookdetail/:id">
          <BookDetail books={nonfictionBooks} isLoading={isLoading} />
        </Route>
        <Route path="/bookdetail1/:id">
          <BookDetail books={howToBooks} isLoading={isLoading} />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
