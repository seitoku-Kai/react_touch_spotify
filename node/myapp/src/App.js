import React, {useState, useEffect } from 'react';
import './App.css';
import LoggedIn from './LoggedIn';
import Login from './Login';
import { getTokenFromUrl } from "./Spotify";

function App(){
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    console.log(hash)
    window.location.hash = "";
    const token = hash.access_token;

    if (token) {
      setToken(token)
    }
  }, [])
  return(
    <div className="App">
      { token ? <LoggedIn/> : <Login/> }
    </div>
  );
}

export default App