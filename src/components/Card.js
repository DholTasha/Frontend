import React from "react";
import axios from "axios";

function Card(props) {
    return (
        <div className="Card">
            <div className="name">
                <h3>{props.name}</h3>
            </div>
            <hr></hr>
            <div className="mobile">
                Phone: {props.mobile}
            </div>
            <div className="mobile">
                Email: {props.email}
            </div>
            <div className="email">
                Events: {props.numberOfEvents}
            </div>
            <div className="maleDhol">
                Males in Dhol: {props.maleDhol}
            </div>
            <div className="maleTasha">
                Males in Tasha : {props.maleTasha}
            </div>
            <div className="femaleDhol">
                Females in Dhol: {props.femaleDhol}
            </div>
            <div className="femaleTasha">
                Females in Tasha :{props.femaleTasha}
            </div>
            <div>
                Address: {props.address}
            </div>


        </div>
    );
}

export default Card;