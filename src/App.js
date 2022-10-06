import React from "react";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Search />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
