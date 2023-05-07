import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Assets/Styles/Profile.css'
import Layout from "../Components/Layout";

function Profile() {
  const [data, setData] = useState([]);
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
        // console.log(data)
      })
      .catch((error) => console(error));
  }, []);

  console.log(data);


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
          </div>
        ) : (
          <>
            <div>
              <p>Number of Events: {data.numberOfEvents}</p>
            </div>
          </>
        )
      }
      {usertype === 'team' &&
        <div>
          <p>Male Dhol: {data.maleDhol}</p>
          <p>Female Dhol: {data.femaleDhol}</p>
          <p>Male Tasha: {data.maleTasha}</p>
          <p>Female Tasha: {data.femaleTasha}</p>
          <p>Address: {data.address}</p>
        </div>
      }
    </div>
    </Layout>
  );
}

export default Profile;