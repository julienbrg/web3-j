import lr from './lr.png';
import './App.css';
import Button from '@mui/material/Button';
// import React, { useEffect, useState } from "react";
import { Web3Storage, File } from 'web3.storage/dist/bundle.esm.min.js'

function App() {

  function getAccessToken() {
    return process.env.WEB3STORAGE_TOKEN;
  }
  
  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() });
  }

  function play() {
    console.log("Hello! 🎉");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={lr} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <Button variant="contained" onClick={play}>Play</Button>
      </header>
    </div>
  );
}

export default App;
