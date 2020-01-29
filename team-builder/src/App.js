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
  const addNewTeam = tMember => {
    const newTeam = {
        id: Date.now(),
        name: tMember.name,
        email: tMember.email,
        role: tMember.role
    }
    setTeam([...team, newTeam]);
  }
  return (
    <div className='App'>
      <h1>Team</h1>
      <Form addNewTeam={addNewTeam}/>
      <Team team={team} />
    </div>
  );
}

export default App;
