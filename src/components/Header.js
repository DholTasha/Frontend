import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "../assets/images/hamburger.svg";

function Header() {
  let usertype = undefined;
  if (localStorage.getItem("user")) {
    const user = JSON.parse(localStorage.getItem("user"));
    usertype = user.usertype;
  }

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header id="homepage-header">
      <nav className="navbar navbar-expand-lg">
        <div id="homepage-container">
          <div id="homepage_brand">
            <Link to="/" className="navbar-brand">
              DholTasha
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={Hamburger} alt="" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div id="hamburger" className="navbar-nav">
              {usertype ? (
                usertype === "customer" ? (
                  <>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/" onClick={handleLogout}>
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/event">Marketplace</Link>
                    <Link to="/" onClick={handleLogout}>
                      Logout
                    </Link>
                  </>
                )
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Sign Up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;