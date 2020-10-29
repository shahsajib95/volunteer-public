
import './App.css';
import Navbar from './Component/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import { createContext, useEffect, useState } from 'react';
import Privateroute from './Privateroute';
import Joinform from './Component/Joinform/Joinform';
import Useractivity from './Component/Useractivity/Useractivity';
import Admin from './Component/Admin/Admin';
import Preloadercom from './Component/Preloadercom';
import Noroute from './Component/Noroute/Noroute';


export const Allactivity = createContext();
export const LoggedIn = createContext();
export const NewActivity = createContext();
export const Preloader  = createContext();

function App() {

  const [allactivity, setAlactivity] = useState([])
  const [preloader, setPrealoder] = useState(true)
  const [loggedIn, setLoggedIn] = useState({
    name: '',
    email: ''
  })
  const [newActivity, setNewActivity] =useState({
    name: ''
  })

  useEffect(()=>{
    (async () => {
    await fetch('https://ancient-fjord-93386.herokuapp.com/allactivity')
    .then(res=>res.json())
    .then(data=>{
      setAlactivity(data)
    })})()
  }, [])



  return (
    <div>

      <Preloader.Provider value={[preloader, setPrealoder]}>
      <NewActivity.Provider value={[newActivity, setNewActivity]}>
      <LoggedIn.Provider value={[loggedIn, setLoggedIn]}>
      <Allactivity.Provider value={[allactivity, setAlactivity]}>
      <Router>
          <Switch>
            <Route exact path="/">
              <Navbar/>
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Privateroute path="/join-activity-form">
              <Joinform/>
            </Privateroute>
            <Privateroute path="/my-activity">
              <Navbar/>
              <Useractivity/>
            </Privateroute>
            <Route path="/registered-list">
              <Admin/>
            </Route>
            <Route path="/loader">
              <Preloadercom/>
            </Route>
            <Route path="*">
              <Navbar/>
              <Noroute/>
            </Route>
          </Switch>
      </Router>
      </Allactivity.Provider>
      </LoggedIn.Provider>
      </NewActivity.Provider>
      </Preloader.Provider>
    </div>
  );
}

export default App;
