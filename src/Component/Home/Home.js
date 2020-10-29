
import React, { useContext, useEffect, useState } from 'react';
import { Allactivity, Preloader } from '../../App';
import Preloadercom from '../Preloadercom';
import Task from '../Task/Task';
import './Home.css'

const Home = () => {

  const [preloader, setPrealoder] = useContext(Preloader)
  const [serachText, setSearchText] = useState('');
  const [valueText, setValueText] = useState('');
  const [allActivity, setAllactivity] = useContext(Allactivity)

    const handleChange = (e) => {
      setValueText(e.target.value)
      e.preventDefault()
    }

    const handleSearch = () =>{
      setSearchText(valueText)
    }

    useEffect(()=>{ 
      (async () => {fetch(`https://ancient-fjord-93386.herokuapp.com/task?filter=`+ serachText)
      .then(res=>res.json())
      .then(result=>{
        setAllactivity(result)
        setPrealoder(false)
      })})()
    }, [serachText])
    
  

    return (

      <div className="banner">
        <div className="task-section">
              <h3 className="text-center">I GROW BY HELPING PEOPLE IN NEED.</h3>
                <div className="d-flex justify-content-center mt-5">
                  <input className="form-control w-25" type="text" placeholder="search..." name="data" onBlur={handleChange}/>
                  <button className="btn btn-primary" type='button' onClick={()=> handleSearch()}>Search</button>
               </div>
          <div className="container position-relative mt-5">
            {/* <button onClick={sendData}>Post now</button> */}
             {preloader ? <Preloadercom/> : <Task/>}
          </div>
        </div>
     </div>

    );
};

export default Home;