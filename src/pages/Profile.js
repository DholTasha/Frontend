import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../assets/styles/Profile.css'
import Layout from "../components/Layout";

function Profile() {
  const [data, setData] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  const usertype = user.usertype;
  let token = user.token;
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
        if(usertype == "customer"){
          setData(response.data.customer);
        }
        else {
          setData(response.data.team);
        }
      })
      .catch((error) => console(error));
  }, []);

  return (
    <Layout>
      <div className="profile">
        <h1>Name:{data.name}</h1>
        <p>Email: {data.email}</p>
        <p>Mobile: {data.mobile}</p>
        { usertype === "team" ? (
            <div>
              <p>Male Dhol: {data.maleDhol}</p>
              <p>Female Dhol: {data.femaleDhol}</p>
              <p>Male Tasha: {data.maleTasha}</p>
              <p>Female Tasha: {data.femaleTasha}</p>
              <p>Address: {data.address}</p>
              <p>Video Link: {data.videoLink}</p>
            </div>
          ) : (
            <>
              <div>
                <p>Number of Events: {data.numberOfEvents}</p>
              </div>
            </>
          )
        }
        <Link to={"/update/profile"}>
            <span>Update Profile</span>
        </Link>
      </div>
    </Layout>
  );
}

export default Profile;