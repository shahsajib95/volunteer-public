import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoggedIn } from '../App';
import logo from '../logos/Group 1329.png'

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);
    const [loggedIn, setLoggedIn] = useContext(LoggedIn)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (

        <div className={(isSticky || isCollapsed) ? "slide in show shadow-sm navbar navbar-expand-sm bg-white navbar-light py-3  fixed-top" : "slide out show navbar navbar-expand-sm navbar-light fixed-top"}>
            <div className="container">
                <button onClick={
                    () => setCollapsed(!isCollapsed ? 'show' : null)} className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/"><img className="w-25" src={logo} alt="Logo" /></Link>

                <div className={`collapse navbar-collapse ${isCollapsed}`} id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/donation">Donation</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/my-activity">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                    </ul>
                    {loggedIn.email && loggedIn.name}
                    {!loggedIn.email  && <Link to="/login"><button className="btn btn-primary my-3 pl-5 pr-5" type="submit">Register</button></Link>}
                    {!loggedIn.email  && <Link to="/registered-list"><button className="btn btn-dark my-3 pl-5 pr-5 ml-2" type="submit">Admin</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;