import React from "react";
import { useSelector } from "react-redux";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  
  const { loginUser } = useSelector((state) => ({
    loginUser: state.userInfo.user,
  }));

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
        {!loginUser ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <li>
            <Link to="/mypage">MyPage</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Nav;
