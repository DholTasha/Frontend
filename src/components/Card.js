import React from 'react';
import '../assets/styles/Card.css';
import { useNavigate } from 'react-router-dom';

function Card(props) {
    const navigate = useNavigate();
    let token = undefined;
    if (localStorage.getItem("user")) {
        token = JSON.parse(localStorage.getItem("user")).token;
    }
    const handleClick = (e) => {
        e.preventDefault();
        if(token != undefined) {
            navigate(`/team/${props.id}`);
        }
        else {
            alert('Please Login');
            navigate('/login');
        }
    };
    return (
        <div className="template">
            <div className="info">
                <div className="row">
                    <span className="label">Name:</span>
                    <span className="value">{props.name}</span>
                </div>
                <div className="row">
                    <span className="label">Phone:</span>
                    <span className="value">{props.mobile}</span>
                </div>
                <div className="row">
                    <span className="label">Email:</span>
                    <span className="value">{props.email}</span>
                </div>
                {/* <div className="row">
                    <span className="label">Events:</span>
                    <span className="value">{props.numberOfEvents}</span>
                </div> */}
                <div className="row">
                    <span className="label">Males in Dhol:</span>
                    <span className="value">{props.maleDhol}</span>
                </div>
                <div className="row">
                    <span className="label">Males in Tasha:</span>
                    <span className="value">{props.maleTasha}</span>
                </div>
                <div className="row">
                    <span className="label">Females in Dhol:</span>
                    <span className="value">{props.femaleDhol}</span>
                </div>
                <div className="row">
                    <span className="label">Females in Tasha:</span>
                    <span className="value">{props.femaleTasha}</span>
                </div>
                <div className="row">
                    <span className="label">Address:</span>
                    <span className="value"> {props.address}</span>
                </div>
                <button className='view-button-class' value={props.id} onClick={handleClick}>View Team</button>
            </div>
        </div>
    );
}

export default Card;