import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Allactivity, NewActivity } from '../../App';
import './Task.css';

const Task = () => {
    const [allactivity] = useContext(Allactivity);
    const [newActivity, setNewActivity] = useContext(NewActivity);
    
  const handleActivity = task =>{
    window.localStorage.setItem('taskName', JSON.stringify(task.name))
    const taskName = JSON.parse(localStorage.getItem('taskName'));
    setNewActivity(taskName)
  }

  
    return (
        <>
        <div className="row">
        {allactivity.map(task=>
            <div key={task._id} className="col-md-3 col-sm-6 mt-5" onClick={()=> handleActivity(task)}>
                <Link to="/join-activity-form"><img className="w-75" src={require(`../../images/${task.pic}`).default} alt="images"/>
                    <div className="position-absolute text-center p-2 card-sec">
                        {task.name}
                    </div>
                 </Link>
            </div>)}
        </div>
        </>
    );
};

export default Task;