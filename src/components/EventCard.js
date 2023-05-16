import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/EventCard.css';

function EventCard(props) {
    const navigate = useNavigate();
    let token = undefined;
    if (localStorage.getItem("user")) {
        token = JSON.parse(localStorage.getItem("user")).token;
    }
    const handleClick = (e) => {
        e.preventDefault();
        axios.delete(`https://dhol-tasha-backend.vercel.app/event/delete/${props.id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            alert("Event Deleted Successfully");
            navigate('/manage/event');
        })
        .catch((error) => console.log(error));
    };
    
    return (
        
        <div class="container">
	
            <div class="table">
                <div class="table-content">	
                    <div class="table-row">		
                        <div class="table-data">Event Name</div>
                        <div class="table-data">{props.name}</div>
                    </div>
                    <div class="table-row">
                        <div class="table-data">Event Location</div>
                        <div class="table-data">{props.location}</div>
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
                        <div class="table-data">Event Video Link:</div>
                        <div class="table-data">{props.videoLink}</div>
                    </div>
                    <div className='button-class'>
                    {props.isManage && <>
                        <button className='view-button-class' onClick={`/event/form/${props.id}`}>Update</button>
                        {/* <Link to={`/event/form/${props.id}`}>
                            <span>Update</span>
                        </Link> */}
                        <button className='view-button-class' onClick={handleClick}>Delete</button>
                    </>}
                    </div>
                    
                </div>	
            </div>
        </div>
        
        // <div className="template">
        //     <div className="info">
        //         <div className="row">
        //             <div className="label">Event Name:</div>
        //             <div className="value">{props.name}</div>
        //         </div>
        //         <div className="row">
        //             <div className="label">Event Location:</div>
        //             <div className="value">{props.location}</div>
        //         </div>

        //         <div className="row">
        //             <div className="label">Males in Dhol:</div>
        //             <div className="value">{props.maleDhol}</div>
        //         </div>
        //         <div className="row">
        //             <div className="label">Males in Tasha:</div>
        //             <div className="value">{props.maleTasha}</div>
        //         </div>
        //         <div className="row">
        //             <div className="label">Females in Dhol:</div>
        //             <div className="value">{props.femaleDhol}</div>
        //         </div>
        //         <div className="row">
        //             <div className="label">Females in Tasha:</div>
        //             <div className="value">{props.femaleTasha}</div>
        //         </div>
        //         <div className="row">
        //             <div className="label">Event Video Link:</div>
        //             <div className="value">{props.videoLink}</div>
        //         </div>
        //         {props.isManage && <>
        //             <Link to={`/event/form/${props.id}`}>
        //                 <span>Update</span>
        //             </Link>
        //             <button onClick={handleClick}>Delete</button>
        //         </>}
        //     </div>
        // </div>
    );
}

export default EventCard;