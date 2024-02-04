import React from 'react';
import './TierList.css';

const Tier = ({ tierName, cost, benefits }) => {
    return (
        <div className="tier">
            <div className="tier-name">{tierName}</div>
            <div className="benefits">
                {benefits.map((benefit, index) => (
                    <div key={index} className="benefit">{benefit}</div>
                ))}
            </div>
            <div className="cost">{cost}</div>
        </div>
    );
};

const TierList = () => {
    return (
        <div className="tier-list">
            <Tier tierName="PLATINUM PARTNER" cost="$5,000+" benefits={["Dedicated Spotlight Day", "Special Recognition at RISE", "Dedicated Social Media Post"]} />
            <Tier tierName="GOLD PARTNER" cost="$3,000+" benefits={["Prelude Session Slot", "Logo on Digital Promotion", "Logo on Merchandise"]} />
            <Tier tierName="SILVER PARTNER" cost="$1,000+" benefits={["Logo on Website", "Additional Booth Space"]} />
            <Tier tierName="RISE PARTICIPANT" cost="FREE" benefits={["Booth Space to Display Projects", "Application for Presentation Slot"]} />
        </div>
    );
};

export default TierList;
