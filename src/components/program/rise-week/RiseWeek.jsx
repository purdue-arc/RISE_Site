import React from 'react';
import './RiseWeek.css';

function RiseWeek() {
    return (
        <div className="rise-week-container">
            <div className="title">
                RISE WEEK | 3/25 - 3/29
            </div>
            <div className="week-grid">
                <div className="day">
                    <div className="day-name">Monday</div>
                    <div className="day-event">Spotlight Day</div>
                </div>
                <div className="day">
                    <div className="day-name">Tuesday</div>
                    <div className="day-event">Spotlight Day</div>
                </div>
                <div className="day">
                    <div className="day-name">Wednesday</div>
                    <div className="day-event">Spotlight Day</div>
                </div>
                <div className="day">
                    <div className="day-name">Thursday</div>
                    <div className="day-event">Prelude Session</div>
                </div>
                <div className="day">
                    <div className="day-name">Friday</div>
                    <div className="day-event">Prelude Session</div>
                </div>
            </div>
        </div>
    );
}

export default RiseWeek;
