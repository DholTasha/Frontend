import React from 'react';
import '../assets/styles/Card.css';

function Card(props) {
    return (
        <div className="template">
            <div className="info">
                <div className="row">
                    <div className="label">Name:</div>
                    <div className="value">{props.name}</div>
                </div>
                <div className="row">
                    <div className="label">Phone:</div>
                    <div className="value">{props.mobile}</div>
                </div>
                <div className="row">
                    <div className="label">Email:</div>
                    <div className="value">{props.email}</div>
                </div>
                <div className="row">
                    <div className="label">Events:</div>
                    <div className="value">{props.numberOfEvents}</div>
                </div>
                <div className="row">
                    <div className="label">Males in Dhol:</div>
                    <div className="value">{props.maleDhol}</div>
                </div>
                <div className="row">
                    <div className="label">Males in Tasha:</div>
                    <div className="value">{props.maleTasha}</div>
                </div>
                <div className="row">
                    <div className="label">Females in Dhol:</div>
                    <div className="value">{props.femaleDhol}</div>
                </div>
                <div className="row">
                    <div className="label">Females in Tasha:</div>
                    <div className="value">{props.femaleTasha}</div>
                </div>
                <div className="row">
                    <div className="label">Address:</div>
                    <div className="value"> {props.address}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;