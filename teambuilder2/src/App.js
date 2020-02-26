import React, {useState} from 'react';
import Member from './components/Member';
import MemberForm from './components/MemberForm';
import './App.css';

function App() {
  const [member, setMember] = useState([
    {
      name: 'Adam',
      email: 'someemail@mail.com',
      position: 'student'
    }
  ]);
  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      position: member.position
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
