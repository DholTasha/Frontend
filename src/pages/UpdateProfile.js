import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../assets/styles/Signup.css'
import Layout from '../components/Layout';
import axios from 'axios';

function UpdateProfile() {
    const [data, setData] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    const usertype = user.usertype;
    let token = user.token;
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://dhol-tasha-backend.vercel.app/${usertype}/me`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                response.data.usertype = usertype;
                if (usertype == "customer") {
                    setData(response.data.customer);
                }
                else {
                    setData(response.data.team);
                }
            })
            .catch((error) => console(error));
    }, []);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const arr = ['mobile', 'maleDhol', 'femaleDhol', 'maleTasha', 'femaleTasha'];

        if (arr.includes(name)) {
            setData({ ...data, [name]: parseInt(value)});
        } else {
            setData({ ...data, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let updateData;
        if(usertype === 'team') {
            const {name, email, maleDhol, femaleDhol, maleTasha, femaleTasha, address, mobile} = data;
            updateData = {name, email, maleDhol, femaleDhol, maleTasha, femaleTasha, address, mobile};
        }
        else {
            const {name, email, mobile} = data;
            updateData = {name, email, mobile};
        }
        console.log(updateData);
        await axios.patch(`https://dhol-tasha-backend.vercel.app/${usertype}/me`, updateData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        .then(function (res) {
            alert("Profile Updated Successfully");
            navigate('/profile');
        })
        .catch(function (err) {
            console.log(err);
        });
    };

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <h1>Update Form</h1>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" defaultValue = {data.name} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" defaultValue = {data.email} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Mobile:
                        <input type="tel" name="mobile" defaultValue = {data.mobile} onChange={handleChange} />
                    </label>
                </div>
                {usertype === 'team' && (
                    <>
                        <div>
                            <label>
                                Male Dhol:
                                <input type="text" name="maleDhol" defaultValue = {data.maleDhol} onChange={handleChange}  />
                            </label>
                        </div>
                        <div>
                            <label>
                                Female Dhol:
                                <input type="text" name="femaleDhol" defaultValue = {data.femaleDhol} onChange={handleChange}  />
                            </label>
                        </div>
                        <div>
                            <label>
                                Male Tasha:
                                <input type="text" name="maleTasha" defaultValue = {data.maleTasha} onChange={handleChange}  />
                            </label>
                        </div>
                        <div>
                            <label>
                                Female Tasha:
                                <input type="text" name="femaleTasha" defaultValue = {data.femaleTasha} onChange={handleChange}  />
                            </label>
                        </div>
                        <div>
                            <label>
                                Address:
                                <input type="text" name="address" defaultValue = {data.address} onChange={handleChange}  />
                            </label>
                        </div>
                        <div>
                            <label>
                                Video Link:
                                <input type="url" name="videoLink" defaultValue = {data.videoLink} onChange={handleChange}  />
                            </label>
                        </div>
                    </>
                )}
                <button type="submit">Update</button>
            </form>
        </Layout>
    )
}

export default UpdateProfile;