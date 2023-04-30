import React from "react";
import { useState } from "react";
import NavbarHome from "../navbar/NavbarHome";
import'../../CSS/login.css'
import { Link } from "react-router-dom";
import Zooimg from '../../images/imgbin_dhol-drum-percussion-youtube-png.png'
const PathakLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
      <NavbarHome/>
      <h1 className="p-5 flexwording">
        Welcome to <span className="green">Pathak....!</span>{" "}
      </h1>

      <div className="row justify-content-center">
        <div className="col-lg-4">
          <img className="container-fluid img1" src={Zooimg} alt="" />
        </div>

        <div className="col-lg-4">
          <form className="loginform container p-3" onSubmit={handleSubmit}>
            <h1 className="text-center">login</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="container-fluid inputs"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="container-fluid inputs"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              type="submit"
              className="btn btn-success container-fluid sb-btn"
            >
              log in
            </button>
            <p>
              Don't have an account ?
              <Link to={"/pathaksignup"}>
                <span>sign up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PathakLogin;
