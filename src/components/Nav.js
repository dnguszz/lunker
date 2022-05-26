import React from "react";
import "./Nav.css";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="navbar">
      <ul className="navbar-container">
        <li>
          <Link to="/">Lunker</Link>
        </li>
        <li>
          <Link to="/point">포인트</Link>
        </li>
        <li>
          <Link to="/youtube">영상</Link>
        </li>
        <li>
          <Link to="/info">정보</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
