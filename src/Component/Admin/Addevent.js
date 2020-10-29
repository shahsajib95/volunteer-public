import React, { useState } from 'react';
import './Sidebar.css'
const Addevent = () => {

    const [event, setEvent] = useState({
        name: '',
        eventDate: '',
        description: '',
        pic: ''
    })

    const handleBlur = (e) =>{
        const info = {...event};
        info[e.target.name] = e.target.value
        setEvent(info)
        e.preventDefault()
    }

    const handleForm = (e) => {
        const path = event.pic;
        const filename = path.replace(/^.*\\/, "");
        event.pic = filename;
    //    fetch('https://ancient-fjord-93386.herokuapp.com/addevent', {
    //        method: 'POST',
    //        headers: { 'Content-Type': 'application/json' },
    //        body: JSON.stringify(event)
    //    })
    //    .then(res => {
    //     console.log("sent to event to database")
    //    })
    e.preventDefault()
    }

  
    return (
        
     <div className="content-wrapper">
        <div className="container-fluid">
            <div className="add-event">
                <form onSubmit={handleForm}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Event Title</label>
                            <input type="text" className="form-control" name="name" onBlur={handleBlur}/>
                        </div>
                        <div className="form-group col-md-6">
                                <label>Event Date</label>
                                <input type="text" className="form-control" name="eventDate"onBlur={handleBlur}/>
                         </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Description</label>
                            <textarea className="form-control" rows="3" name="description" onBlur={handleBlur}></textarea>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Banner</label>
                            <input type="file"  name="pic" onChange={handleBlur} className="form-control-file" accept="image/*"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
    );

};

export default Addevent;