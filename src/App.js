import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./Components/Error";
import BookDetail from "./pages/BookDetail";
import BookDetail1 from "./pages/BookDetail1";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/bookdetail/:id">
          <BookDetail />
        </Route>
        <Route path="/bookdetail1/:id">
          <BookDetail1 />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
