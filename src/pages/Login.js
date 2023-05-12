import React from "react";
import { useState } from "react";
import axios from "axios";
import Zooimg from '../assets/images/image.png'
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usertype, setUsertype] = useState("customer");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`https://dhol-tasha-backend.vercel.app/${usertype}/login`, {
            email, password
        })
        .then(function (res) {
            let user = {
                token: res.data.token,
                usertype: res.data.usertype
            };
            console.log(user);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
        })
        .catch(function (err) {
            console.log(err);
        });
        navigate('/');
    };

    return (
        <Layout>
            <h1 className="p-5 flexwording">
                Welcome to <span className="green">Customer....!</span>{" "}
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

                        <div onChange={(e) => setUsertype(e.target.value)}>
                            <input type="radio" value="customer" name="usertype" /> Customer
                            <input type="radio" value="team" name="usertype" /> Team
                        </div>

                        <button
                            type="submit"
                            className="btn btn-success container-fluid sb-btn"
                        >
                            log in
                        </button>
                        <p>
                            Don't have an account ?
                            <Link to={"/signup"}>
                                <span>Sign Up</span>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
