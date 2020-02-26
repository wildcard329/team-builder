import React, {useState} from 'react';

 const MemberForm = props => {
     const [member, setMember] = useState({
         name: '',
         email: '',
         position: ''
     })
     const handleChanges = e => {
         setMember({...member, [e.target.name]: e.target.value});
     };
     const submitForm = e => {
         e.preventDefault();
         props.addMember(member);
     }
    return (
        <Form onSubmit={submitForm}>
            <label htmlFor="name">Member Name</label>
            <input
            id="name"
            type="text"
            name="name"
            onChange = {handleChanges}
            value={member.name} />
            <label htmlFor="email">Member Email</label>
            <input
            id="email"
            type="email"
            name="email"
            onChange={handleChanges}
            value={member.email} />
            <label htmlFor="position">Member Position</label>
            <input
            id="postion"
            type="text"
            name="position"
            onChange={handleChanges}
            value={member.position} />
        </Form>
    )
}
export default MemberForm;