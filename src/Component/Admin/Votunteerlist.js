import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Preloader } from '../../App';
import Preloadercom from '../Preloadercom';

const Votunteerlist = () => {

    const [preloader, setPrealoder] = useContext(Preloader)
    const [activitylist, setActivityList] =useState([]);

    useEffect(()=>{
        (async () => {fetch('https://ancient-fjord-93386.herokuapp.com/activitylist')
        .then(res=>res.json())
        .then(data=>{
            setActivityList(data)
            setPrealoder(false)
        })})()
    }, [])

    const handleDelete = async (id) =>{
        await fetch(`https://ancient-fjord-93386.herokuapp.com/deleteactivity/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                window.location.reload()
            }
        })

    }

    return (
         <div className="content-wrapper">
                <div className="container-fluid">
                    {preloader ? <Preloadercom/>
                    :
                    <div className="table-container">
                    <table className="table">
                        <thead className="table-header">
                            <tr>
                                <th scope="col">name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Registration Date</th>
                                <th scope="col">Volunteer list</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                       <tbody>
                            {activitylist.map(tasks=>
                            <tr key={tasks._id}>
                                <td>{tasks.fullname}</td>
                                <td>{tasks.email}</td>
                                <td>{tasks.date}</td>
                                <td>{tasks.taskName}</td>
                                <td><DeleteForeverIcon 
                                onClick={()=> handleDelete(tasks._id)}
                                style={{cursor: 'pointer', backgroundColor: 'red', color:'white', borderRadius: '5px'}}/></td>
                            </tr>)}
                        </tbody>
                    </table>
                    </div>}
                </div>
            </div>
    );
};

export default Votunteerlist;