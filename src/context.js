import React, { useState, useContext, useCallback, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
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
    setIsLoading(true);
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
    <AppContext.Provider
      value={{
        businessBooks,
        howToBooks,
        isLoading,
        month,
        setMonth,
        year,
        setYear,
        currentMonth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
