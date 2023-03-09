import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
let key = process.env.REACT_APP_BOOK_KEY;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState("game of thrones");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${key}`
      );
      setLoading(false);
      setBooks(data.items);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, [search]);

  return (
    <AppContext.Provider
      value={{
        books,
        search,
        setSearch,
        loading,
        setBooks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// global Context hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
