import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import '../assets/styles/Signup.css'
import Layout from '../components/Layout';
import axios from 'axios';

function EventForm() {
    const [event, setEvent] = useState({name: "", maleDhol: 0, femaleDhol: 0, maleTasha: 0, femaleTasha: 0, location: "", videoLink: ""});
    const user = JSON.parse(localStorage.getItem("user"));
    let token = user.token;
    let { eventId } = useParams();
    const navigate = useNavigate();

    const getEvent = async () => {
        axios.get(`https://dhol-tasha-backend.vercel.app/event/details/${eventId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            setEvent(response.data.event)
        })
        .catch((error) => console.log(error));
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const arr = ['maleDhol', 'femaleDhol', 'maleTasha', 'femaleTasha'];

        if (arr.includes(name)) {
            setEvent({ ...event, [name]: parseInt(value) });
        } else {
            setEvent({ ...event, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(eventId != undefined) {
            const { name, location, maleDhol, femaleDhol, maleTasha, femaleTasha, videoLink } = event;
            let updateData = { name, location, maleDhol, femaleDhol, maleTasha, femaleTasha, videoLink };
            await axios.patch(`https://dhol-tasha-backend.vercel.app/event/update/${eventId}`, updateData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(function (res) {
                alert("Event Updated Successfully");
                navigate('/manage/event');
            })
            .catch(function (err) {
                console.log(err);
            });
        }
        else {
            console.log(event);
            await axios.post(`https://dhol-tasha-backend.vercel.app/event/add`, event, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(function (res) {
                alert("Event Added Successfully");
                navigate('/manage/event');
            })
            .catch(function (err) {
                console.log(err);
            });
        }
    };

    useEffect(() => {
        if(eventId != undefined) getEvent();
    }, []);

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <h1>Update Event Form</h1>
                <div>
                    <label>
                        Event Name:
                        <input type="text" name="name" defaultValue={event.name} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Male Dhol:
                        <input type="number" name="maleDhol" defaultValue={event.maleDhol} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Female Dhol:
                        <input type="number" name="femaleDhol" defaultValue={event.femaleDhol} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Male Tasha:
                        <input type="number" name="maleTasha" defaultValue={event.maleTasha} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Female Tasha:
                        <input type="number" name="femaleTasha" defaultValue={event.femaleTasha} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Event Location:
                        <input type="text" name="location" defaultValue={event.location} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Event Video Link:
                        <input type="url" name="videoLink" defaultValue={event.videoLink} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">{eventId != undefined ? "Update" : "Add"} Event</button>
            </form>
        </Layout>
    )
}

export default EventForm;