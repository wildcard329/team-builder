import React from 'react';

const Team = props => {
    return (
        <div className='team-list'>
            {props.team.map(tMember => (
                <div className='tmember' key={tMember.id}>
                    <h2>{tMember.name}</h2>
                    <h2>{tMember.email}</h2>
                    <h2>{tMember.role}</h2>
                </div>
            ))}
        </div>
    )
};

export default Team;