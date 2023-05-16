import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import '../assets/styles/Profile.css'
import Layout from "../components/Layout";
import EventCard from "../components/EventCard";

function Profile() {
    const [data, setData] = useState({});
    const [events, setEvents] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    const usertype = user.usertype;
    let token = user.token;
    let { teamId } = useParams();

    const getUser = async () => {
        let url = "https://dhol-tasha-backend.vercel.app/";
        if(usertype === 'customer') {
            url += `customer/team/${teamId}`
        }
        else {
            url += `team/profile/${teamId}`;
        }
        axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })
            .then((response) => {
                response.data.usertype = usertype;
                setData(response.data.team);
                console.log(data);
            })
            .catch((error) => console(error));
    }

    const getEvents = async () => {
        let url = "https://dhol-tasha-backend.vercel.app/";
        if (usertype === 'customer') {
            url += `customer/team/events/${teamId}`;
        }
        else {
            url += `team/event/details/${teamId}`;
        }
        axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                setEvents(response.data.events);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getUser();
        getEvents();
    }, []);

    return (
        <Layout>
            <div className="profile">
                <h1>Name:{data.name}</h1>
                <p>Email: {data.email}</p>
                <p>Mobile: {data.mobile}</p>
                <div>
                    <p>Male Dhol: {data.maleDhol}</p>
                    <p>Female Dhol: {data.femaleDhol}</p>
                    <p>Male Tasha: {data.maleTasha}</p>
                    <p>Female Tasha: {data.femaleTasha}</p>
                    <p>Address: {data.address}</p>
                    <p>Video Link: {data.videoLink}</p>
                    {/* <p>Number of Events: {data.numberOfEvents}</p> */}
                </div>
                <div className="home">
                    <div className="events">
                        {events
                            ? events.map((element, key) => (
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
                                    isManage={0}
                                />
                            ))
                            : alert("No Events")}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Profile;