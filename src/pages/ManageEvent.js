import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import '../assets/styles/Home.css'
import EventCard from '../components/EventCard';

const Event = (props) => {
    const navigate = useNavigate();
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
        })
        .catch((error) => console.log(error));
    }, [])

  const handleAddEvent = (e) => {
    navigate(`/event/form`);
  };

    return (
      <Layout>
          <div className="home">
            <p>Manage Event</p>
            <button onClick={handleAddEvent}>Add Event</button>
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
                        videoLink={element.videoLink}
                        isManage={1}
                    />
                    ))
                : alert("No Teams")}
            </div>
          </div>
      </Layout>
    )
}

export default Event