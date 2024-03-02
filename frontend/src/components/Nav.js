import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Products</Link>
        </li>
        <li>
          <Link to="/update"> Update Products</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        {/* <li>
          {" "}
          <Link onClick={logout} to="/signup">
            Logout ({JSON.parse(auth).name})
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Nav;
