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
    axios.get(`https://dhol-tasha-backend.vercel.app/${usertype}/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
    .then((response) => {
      response.data.usertype = usertype;
      if(usertype === "team"){
        setData(response.data.team);
      }
      else {
        setData(response.data.customer);
      }
    })
    .catch((error) => console(error));
  }
  
  const getEvents = async() => {
    let url = "https://dhol-tasha-backend.vercel.app/";
    if(usertype === 'customer') {
      url += `customer/team/events/${teamId}`;
    }
    else {
      url += 'team/events/all';
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
    if(usertype === 'team') getEvents();
  }, []);

  return (
        <Layout>
          <div class="container">
            <div class="table">
                <div class="table-content">	
                    <div class="table-row">		
                        <div class="table-data">Name</div>
                        <div class="table-data">{data.name}</div>
                    </div>
                    <div class="table-row">
                        <div class="table-data">Email</div>
                        <div class="table-data">{data.email}</div>
                    </div>
                    <div class="table-row">
                        <div class="table-data">Mobile</div>
                        <div class="table-data">{data.mobile}</div>
                    </div>
                </div>
                    
                      
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
                            : alert("No Events")
                        }
                    
                  
                
        </div>
      </div>
    </Layout>
  );
}

export default Profile;