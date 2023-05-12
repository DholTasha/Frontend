import React from 'react';

function EventCard(props) {
    return (
        <div className="template">
            <div className="info">
                <div className="row">
                    <div className="label">Name:</div>
                    <div className="value">{props.name}</div>
                </div>
                <div className="row">
                    <div className="label">Location:</div>
                    <div className="value">{props.location}</div>
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
            </div>
        </div>
    );
}

export default EventCard;