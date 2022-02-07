import lr from './lr.png';
import './App.css';
import Button from '@mui/material/Button';
// import React, { useEffect, useState } from "react";
import { Web3Storage, File } from 'web3.storage/dist/bundle.esm.min.js'

function App() {

  function getAccessToken() {
    // Get your own API token at https://web3.storage/account/
    return process.env.REACT_APP_WEB3STORAGE_TOKEN;
  }
  
  function makeStorageClient() {
    console.log("makeStorageClient ✅ ");
    return new Web3Storage({ token: getAccessToken() });
  }

  function makeFileObjects() {
    console.log("makeFileObjects ✅ ");
    // You can create File objects from a Blob of binary data
    // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
    // Here we're just storing a JSON object, but you can store images,
    // audio, or whatever you want!
    const obj = { game: 'Lode Runner' };
    const blob = new Blob([JSON.stringify(obj)], {type : 'application/json'});
  
    const files = [
      new File(['contents-of-file-1'], 'plain-utf8.txt'),
      new File([blob], 'hello.json')
    ];
    return files;
  }

  async function storeFiles(files) {
    console.log("storeFiles ✅ ");
    const client = makeStorageClient();
    const cid = await client.put(files);
    console.log('stored files with cid:', cid);
    return cid;
  }

  async function play() {
    console.log("Hello! 👋 ");
    makeStorageClient();
    storeFiles(makeFileObjects());
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
