import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Directory from "./components/pages/Directory";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <div>
        <Directory></Directory>
      </div>
    </Router>
  );
}

export default App;
