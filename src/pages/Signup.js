import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../assets/styles/Signup.css'
import Layout from '../components/Layout';

function SignUpForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState(0);
    const [usertype, setUsertype] = useState('team');
    const [maleDhol, setMaleDhol] = useState(0);
    const [femaleDhol, setFemaleDhol] = useState(0);
    const [maleTasha, setMaleTasha] = useState(0);
    const [femaleTasha, setFemaleTasha] = useState(0);
    const [address, setAddress] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const navigate = useNavigate();

    const handleUsertypeChange = (event) => {
        setUsertype(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data;
        if (usertype === 'team') {
            data = { name, email, password, mobile, maleDhol, femaleDhol, maleTasha, femaleTasha, address, videoLink };
        }  
        else{
            data = { name, email, password, mobile };
        }
        console.log(data);
        await axios.post(`https://dhol-tasha-backend.vercel.app/${usertype}/signup`, data)
        .then(function (res) {
            let user = {
                token: res.data.token,
                usertype: res.data.usertype
            };
            localStorage.setItem("user", JSON.stringify(user));
            navigate('/');
        })
        .catch(function (err) {
            console.log(err);
        });
    };

    return (
        <Layout>

            <form onSubmit={handleSubmit}>
                <h1>Sign Up Form</h1>
                <div>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Mobile:
                        <input type="number" value={mobile} onChange={(event) => setMobile(parseInt(event.target.value))} />
                    </label>
                </div>
                <div>
                    <label>
                        User Type:
                    </label>
                    <label>
                        <input type="radio" name="user-type" value="customer" checked={usertype === 'customer'} onChange={handleUsertypeChange} />
                        Customer
                    </label>
                    <label>
                        <input type="radio" name="user-type" value="team" checked={usertype === 'team'} onChange={handleUsertypeChange} />
                        Team
                    </label>
                </div>
                {usertype === 'team' && (
                    <>
                        <div>
                            <label>
                                Male Dhol:
                                <input type="number" value={maleDhol} onChange={(event) => setMaleDhol(parseInt(event.target.value))} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Female Dhol:
                                <input type="number" value={femaleDhol} onChange={(event) => setFemaleDhol(parseInt(event.target.value))} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Male Tasha:
                                <input type="number" value={maleTasha} onChange={(event) => setMaleTasha(parseInt(event.target.value))} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Female
                                Tasha:
                                <input type="number" value={femaleTasha} onChange={(event) => setFemaleTasha(parseInt(event.target.value))} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Address:
                                <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Video Link:
                                <input type="url" value={videoLink} onChange={(event) => setVideoLink(event.target.value)} />
                            </label>
                        </div>
                    </>
                )}
                <button type="submit">Submit</button>
                <p>
                    Already have an account ?
                    <Link to={"/login"}>
                        <span>Log In</span>
                    </Link>
                </p>
            </form>
        </Layout>
    )
}

export default SignUpForm;