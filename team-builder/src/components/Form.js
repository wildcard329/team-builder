import React, { useState } from 'react';

const Form = props => {
    const [team, setTeam] = useState({
        title: ''
    })
    const handleChanges = e => {
        setTeam({title: e.target.value})
    }

    return (
        <form>
            <label htmlFor='title'>Team Title</label>
            <input id='title' type='text' onChange={handleChanges} />
        </form>

    )

}