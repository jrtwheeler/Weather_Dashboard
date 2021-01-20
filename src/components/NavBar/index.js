import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from "moment";

function NavBar() {
  return (
    <header className="header">
      <h1 class="display-4 text-center font-weight-bolder text-white"><FontAwesomeIcon icon="wind"/> Weather Dashboard</h1>
      {moment().format("DD-MM-YYYY hh:mm:ss")}
    </header>
  );
}

export default NavBar;
