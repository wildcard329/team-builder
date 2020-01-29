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
  const addNewMember = member => {
    const newMember = {
        id: Date.now(),
        name: member.name,
        email: member.email,
        role: member.role
    }
    setTeam([...team, newMember]);
  }
  return (
    <div className='App'>
      <h1>Team</h1>
      <Form addNewMember={addNewMember}/>
      <Team team={team} />
    </div>
  );
}

export default App;
