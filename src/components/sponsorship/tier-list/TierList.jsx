import React from 'react';
import './TierList.css';

const Tier = ({ tierName, cost, benefits, tierColor }) => {
    return (
        <div className="tier">
            <div className="tier-name">{tierName}</div>
            <div className="tier-text">
            <div className="benefits">
                {benefits.map((benefit, index) => (
                    <div key={index} className="benefit">{benefit}</div>
                ))}
            </div>
            </div>
            <div className={`cost ${tierColor}`}>{cost}</div>
        </div>
    );
};

const TierList = () => {
    return (
        <div className="tier-list">
            <div className= "tiers">
                <Tier tierName="RISE PARTICIPANT" cost="FREE" benefits={["Booth Space to Display Projects", "Application for Presentation Slot"]} tierColor="participant" />
                <Tier tierName="SILVER PARTNER" cost="$1,000+" benefits={["Logo on Website", "Additional Booth Space"]} tierColor="silver" />
                <Tier tierName="GOLD PARTNER" cost="$3,000+" benefits={["Prelude Session Slot", "Logo on Digital Promotion", "Logo on Merchandise"]} tierColor="gold" />
                <Tier tierName="PLATINUM PARTNER" cost="$5,000+" benefits={["Dedicated Spotlight Day", "Special Recognition at RISE", "Dedicated Social Media Post"]} tierColor="platinum" />
            </div>
            <div className="tier-inclusion-note">
                *All higher tier perks include the benefits of the previous tiers.
            </div>
        </div>
    );
};

export default TierList;
