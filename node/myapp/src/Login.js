import React from 'react';
import { accessUrl } from './Spotify';

function Login(){
    return(
      <div class Name="Login">
        <h2>ログイン前です</h2>
        <a href={accessUrl}>spotifyへログイン</a>
      </div>
    )
  }
  
  export default Login