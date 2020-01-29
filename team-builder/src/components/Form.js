import React, { useState } from 'react';

const Form = props => {
    const [team, setTeam] = useState({
        id: 1,
        name: '',
        email: '',
        role: ''
    })

    const handleChanges = e => {
        setTeam({...team, [e.target.name]: e.target.value});
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewTeam(team);
        console.log(team)
    };

    return (
        <form onSubmit={submitForm}>
            <div>
                <label htmlFor='name'>Member Name </label>
                <input id='name' type='text' name='entry' onChange={handleChanges} />
            </div>
            <div>
                <label htmlFor='email'>Member Email </label>
                <input id='email' type='text' name='entry' onChange={handleChanges} />
            </div>
            <div>
                <label htmlFor='role'>Member Role </label>
                <input id='role' type='text' name='entry' onChange={handleChanges} />
            </div>
            <button type="submit">Add Member</button>
        </form>

    )

}

export default Form;


// imported the usestate hook from react, initialized the state, set an
// on change handler to control input, and returned a form that has value 
// set to the state of its change