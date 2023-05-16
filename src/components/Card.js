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
        <div class="container">
	
            <div class="table">
                <div class="table-content">	
                    <div class="table-row">		
                        <div class="table-data">Name</div>
                        <div class="table-data">{props.name}</div>
                    </div>
                    <div class="table-row">
                        <div class="table-data">Phone</div>
                        <div class="table-data">{props.mobile}</div>
                    </div>
                    <div class="table-row">
                        <div class="table-data">Males in Dhol</div>
                        <div class="table-data">{props.maleDhol}</div>
                    </div>
                     <div class="table-row">
                         <div class="table-data">Males in Tasha</div>
                         <div class="table-data">{props.maleTasha}</div>
                   </div>
                     <div class="table-row">
                        <div class="table-data">Females in Dhol</div>
                        <div class="table-data">{props.femaleDhol}</div>
                    </div>
                     <div class="table-row">
                        <div class="table-data">Females in Tasha</div>
                        <div class="table-data">{props.femaleTasha}</div>
                    </div>
                     <div class="table-row">
                        <div class="table-data">Address</div>
                        <div class="table-data">{props.address}</div>
                    </div>
                     <button className='view-button-class' value={props.id} onClick={handleClick}>View Team</button>
                </div>	
            </div>
        </div>
    );
}

export default Card;