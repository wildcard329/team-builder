import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Team from './components/Team';
import Form from './components/Form';
import './App.css';

function App() {
  const [team, setTeam] = useState([
    {
      name: 'Administrator',
      email: 'admin@email.com',
      role: 'admin'
  }
])
  return (
    <div className='App'>
      <h1>Team</h1>
      <Form />
      <Team team={team} />
    </div>
  );
}

export default App;
