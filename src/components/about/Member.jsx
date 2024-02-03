import React from 'react';
import "./Member.css";

function Member({ img, name, role, link }) {
    const handleClick = () => {
        window.open(link, '_blank');
    }

    return (
        <div className="member-container" onClick={handleClick}>
            <img src={img} alt="ARC Member" />
            <p>{name}</p>
            <p>{role}</p>
        </div>
    );
}

export default Member;
