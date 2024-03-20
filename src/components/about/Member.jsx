import React from 'react';
import "./Member.css";

function Member({ img, name, role, offset, zoom, link }) {
    const handleClick = () => {
        window.open(link, '_blank');
    }

    const imageStyle = {
        objectFit: 'cover',
        transform: `translateY(${offset}%)`,
        height: `${zoom}%`,
        width: 'auto',
    };

    return (
        <div className="member-container" onClick={handleClick}>
            <div className="image-container">
                <img src={img} alt="ARC Member" style={imageStyle}/>
            </div>
            <h1>{name}</h1>
            <p>{role}</p>
        </div>
    );
}

export default Member;
