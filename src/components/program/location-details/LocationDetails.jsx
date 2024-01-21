import React from 'react';
import './LocationDetails.css'; // Make sure to create a corresponding CSS file
import program1 from "../../assets/program1.png"

const LocationDetails = () => {
    return (
        <div className="location-details">
            <div className="location-image-container">
                <img src={program1} alt="Stewart Center at Purdue University" />
            </div>
            <div className="location-content">
                <h2 className="full-location"><div className="location">Location:</div><div className="location-text">Purdue University</div> </h2>
                <p>Consistently ranked as one of the top engineering institutions in the country, Purdue University is dedicated to helping students succeed while developing research at the forefront of industry and discovery.</p>

                <h2 className="full-location"><div className="location">Venue:</div><div className="location-text">The Stewart Center</div> </h2>
                <p>The Stewart Center serves as a dedicated facility at the university for meetings, conferences, and activities.</p>
                <p className="address">Address: 128 Memorial Mall Dr, West Lafayette, IN 47907</p>
            </div>

        </div>
    );
};

export default LocationDetails;
