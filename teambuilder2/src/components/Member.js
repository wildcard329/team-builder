import React from 'react';
import Form from './Form';

const Member = props => {
    return (
        <div className="member-list">
            {props.member.map(mbr => (
                <div className="member" key={mbr.id}>
                    <p>{mbr.name}</p>
                    <p>{mbr.email}</p>
                    <p>{mbr.position}</p>
                    <Form member={mbr} addMember={props.addMember} team={props.member} />
                </div>
            ))}
        </div>
    )
}
export default Member;