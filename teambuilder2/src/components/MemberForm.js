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
         console.log('submitform',member)
     }
    return (
        <form onSubmit={submitForm}>
            <div>
                <label htmlFor="name">Member Name</label>
                <input id="name"
                type="text"
                name="name"
                onChange = {handleChanges}
                value={member.name} />
            </div>
            <div>
                <label htmlFor="email">Member Email</label>
                <input
                id="email"
                type="text"
                name="email"
                onChange={handleChanges}
                value={member.email} />
            </div>
            <div>
                <label htmlFor="position">Member Position</label>
                <input
                id="postion"
                type="text"
                name="position"
                onChange={handleChanges}
                value={member.position} />
            </div>
            <div>
                <button type="submit">Add Member</button>
            </div>
        </form>
    )
}
export default MemberForm;