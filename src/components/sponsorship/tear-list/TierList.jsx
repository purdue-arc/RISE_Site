import React from 'react';
import './TierList.css'; // Make sure to create a corresponding CSS file

const Tier = ({ tearName, cost, benefit1, benefit2, benefit3 }) => {
    return (
        <table className="grid-table">
            <tbody>
            <tr>
                <td rowSpan="2">{tearName}</td>
                <td>{benefit1}</td>
            </tr>
            <tr>
                <td>{benefit2}</td>
            </tr>
            {benefit3 && (
                <tr>
                    <td></td>
                    <td>{benefit3}</td>
                </tr>
            )}
            <tr>
                <td rowSpan="2">{cost}</td>
                <td></td>
            </tr>
            <tr>
                <td>{/* This cell is here just for spacing */}</td>
            </tr>
            </tbody>
        </table>
    );
};


const TierList = () => {
    return (
        <div className="tear-list">
            <table>
                <tr>
                    <Tier tearName="Example Tear" cost="10" benefit1="First Benefit" benefit2="Second Benefit" benefit3="Third Benefit" />
                </tr>
                <tr>
                    <Tier tearName="Another Tear" cost="10" benefit1="First Advantage" benefit2="Second Advantage" />
                </tr>
                <tr>
                    <Tier/>
                </tr>
                <tr>
                    <Tier/>
                </tr>
            </table>
        </div>
    );
};

export default TierList;
