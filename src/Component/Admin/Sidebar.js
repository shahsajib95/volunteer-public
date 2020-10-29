import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../logos/Group 1329.png'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AddIcon from '@material-ui/icons/Add';

const Sidebar = () => {
    return (
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

                <div className="collapse navbar-collapse bg-white text-center" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto sidenav" id="navAccordion">
                        <li className="nav-item mt-5"> 
                           <SupervisorAccountIcon/>Volunteer Registered List <span className="sr-only">(current)</span>
                        </li>
                        <li className="nav-item mt-3">
                            <AddIcon/>Add Event
                        </li>
                    </ul>
                </div>
                </div>
        </div>
    );
};

export default Sidebar;