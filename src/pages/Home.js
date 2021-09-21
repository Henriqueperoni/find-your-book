import React from "react";
import Nonfiction from "../Components/Nonfiction";
import HowTo from "../Components/HowTo";
const Home = ({ nonfictionBooks, howToBooks, isLoading }) => {
  return (
    <div>
      <h2>Nonfiction Best Sellers</h2>
      <Nonfiction nonfictionBooks={nonfictionBooks} isLoading={isLoading} />
      <h2>How To Best Sellers</h2>
      <HowTo howToBooks={howToBooks} isLoading={isLoading} />
    </div>
  );
};

export default Home;
