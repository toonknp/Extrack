import React from "react";
import { Link } from "react-router-dom";

import "./ButtonHomePage.scss";

function ButtonHomePage() {
  return (
    <div className="ButtonHomePage-container">
      <Link to="/signup">
        <button className="button-homePage">Get Started For Free</button>
      </Link>
    </div>
  );
}

export default ButtonHomePage;