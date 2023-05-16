import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import Hamburger from "../assets/images/hamburger.svg";
import '../assets/styles/Heade.css'

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
      {/* <nav className="navbar navbar-expand-lg">
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
                    <Link to="/manage/profile">Manage Customer</Link>
                    <Link to="/" onClick={handleLogout}>
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/manage/profile">Manage Team</Link>
                    <Link to="/manage/event">Manage Event</Link>
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
      </nav> */}

  <nav className="navbar navbar-expand-lg">
    <a className="navbar-brand nav-logo" href="#">Dhol Tasha</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-icons" id="navbarNav">
      {usertype ? (
                  usertype === "customer" ? (
                    <>
                      {/* <Link to="/">Home</Link>
                      <Link to="/profile">Profile</Link> */}
                      {/* <Link to="/manage/profile">Manage Customer</Link> */}
                      {/* <Link to="/" onClick={handleLogout}>
                        Logout
                      </Link> */}
                      <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/profile">Profile</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/manage/profile">Manage Customer</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/" onClick={handleLogout}>Logout</a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/profile">Profile</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/manage/profile">Manage Team</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/manage/event">Manage Event</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/" onClick={handleLogout}>Logout</a>
                      </li>
                    </>
                  )
                ) : (
                  <>
                    {/* <Link to="/login">Login</Link> */}
                    {/* <Link to="/signup">Sign Up</Link> */}
                    <li className="nav-item">
                      <a className="nav-link login-class" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link login-class" href="/signup">Sign up</a>
                    </li>
                  </>
                )}
    </div>
</nav>
    </header>
  );
}

export default Header;