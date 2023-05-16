import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Home = () => {
  const [data, setData] = useState([]);
  let token = undefined;
  if (localStorage.getItem("user")) {
    token = JSON.parse(localStorage.getItem("user")).token;
  }
  useEffect(() => {
    axios
      .get("https://dhol-tasha-backend.vercel.app/team/all")
      .then((res) => {
        setData(res.data.team);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      {data
        ? data.map((element, key) => (
            <Card
              key={key}
              id={element._id}
              name={element.name}
              mobile={element.mobile}
              email={element.email}
              maleDhol={element.maleDhol}
              maleTasha={element.maleTasha}
              femaleDhol={element.femaleDhol}
              femaleTasha={element.femaleTasha}
              address={element.address}
            />
          ))
        : alert("No Teams")}
    </Layout>
  );
};

export default Home;
