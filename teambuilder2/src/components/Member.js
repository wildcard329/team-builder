import React from 'react';

const Member = props => {
    return (
        <div className="member-list">
            {props.member.mpa(mbr => (
                <div className="member" key={mbr.id}>
                    <p>{mbr.name}</p>
                    <p>{mbr.email}</p>
                    <p>{mbr.position}</p>
                </div>
            ))}
        </div>
    )
}
export default Member;