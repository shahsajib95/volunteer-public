
import React, { useContext, useEffect, useState } from 'react';
import { LoggedIn, Preloader } from '../../App';
import image from '../../images/extraVolunteer.png'

const Useractivity = () => {
    const [preloader, setPrealoder] = useContext(Preloader)
    const [loggedIn, setLoggedIn] = useContext(LoggedIn)
    const [deleted, setDleted] = useState(false)
    const [myactivity, setMyActivity] = useState([])
    useEffect(() => {
        fetch('https://ancient-fjord-93386.herokuapp.com/myactivitylist?email=' + loggedIn.email,{
            method: 'GET',
            headers: {'Content-Type': 'application/json',
            authorization: `Bearer ${sessionStorage.getItem('token')}`}
        })
            .then(res => res.json())
            .then(data => {
                setMyActivity(data)
                setPrealoder(true)
            })
    }, [])
    const handleCancel = (id) =>{
        fetch(`https://ancient-fjord-93386.herokuapp.com/deleteactivity/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
        })

    }

    return (
            <div className="my-activity container mt-5">
            {myactivity === '' && <h1 className="text-center">No registered activity</h1>}
                <div className="row">
                {myactivity.map(activity =>
                    <div className="col-md-6" key={activity._id}>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={image} className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{activity.taskName}</h5>
                                            <p className="card-text">{activity.date}</p>
                                            { deleted ?
                                                <button className="btn btn-primary disabled">Cancel</button>
                                                :
                                                <button className="btn btn-primary" onClick={()=> handleCancel(activity._id)}>Cancel</button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
    );
};

export default Useractivity;