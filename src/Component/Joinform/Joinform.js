
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import './Joinform.css';
import logo from '../../logos/Group 1329.png'
import { LoggedIn } from '../../App';

const Joinform = () => {
    const [loggedIn, setLoggedIn] = useContext(LoggedIn)
    let history = useHistory(); 
    let { from } = { from: { pathname: "/my-activity" } };
    const taskName = JSON.parse(localStorage.getItem('taskName'));
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        
        const allData = {...data, taskName};
        fetch('https://ancient-fjord-93386.herokuapp.com/newactivity', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(allData)
        })
            .then(res => {
                history.replace(from);
            })
    };

    return (
        <>

            <div className="text-center join-section">
                <Link to="/"><img className="w-25 align-items-center mt-5" src={logo} alt="logo" /></Link>
                <div className="join-form p-5 mt-2">
                    <h3>Register as a Volunteer</h3>

                    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>

                        <input className="form-control" name="fullname" placeholder="Full Name" ref={register({ required: true })} />
                        {errors.fullname && <span>This field is required</span>}

                        <input className="form-control mt-3" name="email" placeholder="Email" ref={register({ required: true })} defaultValue={loggedIn.email}/>
                        {errors.email && <span>This field is required</span>}

                        <input className="form-control mt-3" name="date" placeholder="mm/dd/yyyy" ref={register({ required: true })} />
                        {errors.date && <span>This field is required</span>}

                        <input className="form-control mt-3" name="description" placeholder="Full Description" ref={register({ required: true })} />
                        {errors.description && <span>This field is required</span>}

                        <input className="form-control mt-3" name="organization" placeholder="Full Organize books at the library" ref={register({ required: true })} />
                        {errors.organization && <span>This field is required</span>}

                         
                        <button className="btn btn-primary form-control mt-3" type="submit">Submit</button>
                        

                    </form>
                </div>
            </div>
        </>
    );
};

export default Joinform;