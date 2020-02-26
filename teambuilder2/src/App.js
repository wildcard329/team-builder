import React, {useState} from 'react';
import Member from './components/Member';
import MemberForm from './components/MemberForm';
import './App.css';

function App() {
  const [member, setMember] = useState([
    {
      name: '',
      email: '',
      position: ''
    }
  ]);
  const addMember = mbr => {
    const newMember = {
      id: Date.now(),
      name: mbr.name,
      email: mbr.email,
      position: mbr.position
    }
    setMember([...member, newMember])
  }
  return (
    <div className="App">
      <h1>Members</h1>
      <MemberForm addMember={addMember} />
      <Member member={member} />
    </div>
  );
}

export default App;
