import React from "react";
import Nonfiction from "../Nonfiction";

const Home = ({ books, isLoading }) => {
  return (
    <div>
      <h2>Nonfiction Best Sellers</h2>
      <Nonfiction books={books} isLoading={isLoading} />
    </div>
  );
};

export default Home;
