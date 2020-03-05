import React, {useState} from 'react';
import Member from './components/Member';
import MemberForm from './components/MemberForm';
import './App.css';

function App() {
  const [memberToEdit] = useState()
  const [member, setMember] = useState([
    {
      name: 'dummy',
      email: 'dummy@mail.com',
      position: 'just there to look pretty'
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
  const addFilterMember = (mbr, filteredArr) => {
    const newMember = {
      id: Date.now(),
      name: mbr.name,
      email: mbr.email,
      position: mbr.position
    }
    setMember([...filteredArr, newMember])
  }
  return (
    <div className="App">
      <h1>Members</h1>
      <MemberForm addMember={addMember} memberToEdit={memberToEdit} />
      <Member member={member} addMember={addFilterMember} />
    </div>
  );
}

export default App;
