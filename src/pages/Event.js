import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Layout from '../components/Layout';
import '../assets/styles/Home.css'
import EventCard from '../components/EventCard';

const Event = (props) => {
    const [data, setData] = useState([])
    let usertype = undefined, token = undefined;
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      usertype = user.usertype;
      token = user.token;
    }
    useEffect(() => {
        axios.get(`https://dhol-tasha-backend.vercel.app/${usertype == "customer" ? usertype + "/": ""}team/events${usertype == "customer"? props.teamId :"/all"}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setData(response.data.events);
        //   console.log(response.data.)
        })
        .catch((error) => console.log(error));
    }, [])

    return (
        <Layout>
            <div className="home">
                <div className="events">
                {data
                    ? data.map((element, key) => (
                        <EventCard
                            key={key}
                            id={element._id}
                            name={element.name}
                            location={element.location}
                            maleDhol={element.maleDhol}
                            maleTasha={element.maleTasha}
                            femaleDhol={element.femaleDhol}
                            femaleTasha={element.femaleTasha}
                        />
                        ))
                    : alert("No Teams")}
                </div>
            </div>
        </Layout>
    )
}

export default Event