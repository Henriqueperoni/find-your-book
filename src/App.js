import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useCallback } from "react";

import Home from "./pages/Home";
import Error from "./Components/Error";
import BookDetail from "./pages/BookDetail";
import Navbar from "./Components/Navbar";

function App() {
  const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
      return `0${month}`;
    } else {
      return month;
    }
  };

  const currentMonth = getCurrentMonth();
  const currentYear = new Date().getFullYear();

  const [businessBooks, setBusinessBooks] = useState([]);
  const [howToBooks, setHowToBooks] = useState([]);
  const [month, setMonth] = useState(parseInt(currentMonth));
  const [year, setYear] = useState(currentYear);
  const [isLoading, setIsLoading] = useState(true);

  const strMonth = (month) => {
    if (month < 10) {
      return `0${month}`;
    } else {
      return month;
    }
  };
  const newMonth = strMonth(month);

  const businessUrl = `https://api.nytimes.com/svc/books/v3/lists/${year}-${newMonth}-01/business-books.json?api-key=${process.env.REACT_APP_BOOK_API_KEY}`;
  const howToUrl = `https://api.nytimes.com/svc/books/v3/lists/${year}-${newMonth}-01/advice-how-to-and-miscellaneous.json?api-key=${process.env.REACT_APP_BOOK_API_KEY}`;

  const fetchBooks = useCallback(async () => {
    try {
      const response = await fetch(businessUrl);
      const newBooks = await response.json();
      setBusinessBooks(newBooks);
      const response1 = await fetch(howToUrl);
      const newBooks1 = await response1.json();
      setHowToBooks(newBooks1);
    } catch (error) {
      console.log(`ERROR :${error}`);
    }
    setIsLoading(false);
  }, [businessUrl, howToUrl]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home
            businessBooks={businessBooks}
            howToBooks={howToBooks}
            isLoading={isLoading}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            currentMonth={currentMonth}
          />
        </Route>
        <Route path="/bookdetail/:id">
          <BookDetail books={businessBooks} isLoading={isLoading} />
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
