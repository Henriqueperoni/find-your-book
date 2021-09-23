import React from "react";
import { Link } from "react-router-dom";
import error from "../images/404.png";

const Error = () => {
  return (
    <div className="error loader">
      <div>
        <img src={error} alt="" />
        <Link to="/">
          <button className="error-btn">Bring me back to safety</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
