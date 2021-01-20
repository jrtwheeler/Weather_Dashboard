import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Table from "./components/Table"
import Directory from "./pages/Directory";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faWind)

const groceries = [
  {
    id: 1,
    name: "Milk",
    purchased: true
  },
  {
    id: 2,
    name: "Eggs",
    purchased: true
  },
  {
    id: 3,
    name: "Cheese",
    purchased: false
  },
  {
    id: 4,
    name: "Cake Mix",
    purchased: false
  },
  {
    id: 5,
    name: "Carrots",
    purchased: false
  },
  {
    id: 6,
    name: "Juice",
    purchased: true
  }
];

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <div>
      <Table groceries={groceries}></Table>
      </div>
    </Router>
  );
}

export default App;
