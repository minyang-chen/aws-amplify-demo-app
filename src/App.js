import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

const myAPI = "api5e3db8ad"
const path = '/clients'; 

const App = () => {
  const [input, setInput] = useState("")
  const [clients, setClients] = useState([])

  //Function to fetch from our backend and update customers array
  function getClient(e) {
    let clientId = e.input
    API.get(myAPI, path + "/" + clientId)
       .then(response => {
         console.log(response)
         let newClients = [...clients]
         newClients.push(response)
         setClients(newClients)

       })
       .catch(error => {
         console.log(error)
       })
  }

  return (
    
    <div className="App">
      <h1>AWS Amplify ReactApp Demo </h1>
      <div>
          <input placeholder="client id" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>      
      </div>
      <br/>
      <button onClick={() => getClient({input})}>Get Client From Backend</button>

      <h2 style={{visibility: clients.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
      {
       clients.map((thisClient, index) => {
         return (
        <div key={thisClient.clientId}>
          <span><b>CustomerId:</b> {thisClient.clientId} - <b>CustomerName</b>: {thisClient.clientName}</span>
        </div>)
       })
      }
    </div>
  )
}

export default App;