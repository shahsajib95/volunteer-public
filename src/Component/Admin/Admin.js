

import Volunteerlist from './Votunteerlist';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../logos/Group 1329.png'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import Addevent from './Addevent';



const Admin = () => {

    const [swap, setSwap] = useState(false)

    
    return (
        <div>
        <div className="side-bar">
        <div className="navbar navbar-expand-lg  fixed-top">
        <Link className="navbar-brand" to="/"><img className="w-25" src={logo} alt="Logo" /></Link>
        <h3> Volunteer register list </h3>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                <ul className="navbar-nav mr-auto sidenav p-2" id="navAccordion">
                     <li className="nav-item mt-5"> 
                    <p className="nav-link" onClick={()=> setSwap(false)} style={{cursor: 'pointer'}}><SupervisorAccountIcon/>Volunteer Registered List<span className="sr-only">(current)</span></p>
                    </li>
                    <li className="nav-item">
                    <p className="nav-link" onClick={()=> setSwap(true)} style={{cursor: 'pointer'}}><AddIcon/>Add Event</p>
                    </li>
                </ul>
            </div>
            </div>
        </div>
            { !swap &&
                <Volunteerlist/>
            }
            { swap &&
                <Addevent/>
            }
        </div>
    );
};

export default Admin;