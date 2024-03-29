import Event from "./Event";
import Time from "./Time";
import rise_graphic from "../assets/graphicRise.png"


const events = [
    { time: "9:00 AM", desc: "Event begins, Booths open" },
    { time: "10:10 AM - 10:50 AM", desc: "Keynote Speaker/Opening Remarks" },
    { time: "11:00 AM - 11:15 AM", desc: "Aidrivers" },
    { time: "11:20 AM - 11:30 AM", desc: "Purdue Space Program: Active Controls" },
    { time: "11:40 AM - 11:55 AM", desc: "TRACE Lab" },
    { time: "12:00 PM - 2:00 PM", desc: "Lunch/Panel: Future of AI Panel" },
    { time: "2:00 PM - 2:15 PM", desc: "CoRal Lab" },
    { time: "2:20 PM - 2:35 PM", desc: "NSWC AI Maritime Maneuvering" },
    { time: "2:40 PM - 2:55 PM", desc: "ROAR Lab" },
    { time: "3:00 PM - 3:15 PM", desc: "Uniform Sierra Aerospace" },
    { time: "3:20 PM - 3:35 PM", desc: "IU School of Informatics, Computing and Engineering, IUPUI" },
    { time: "3:40 PM - 3:55 PM", desc: "Purdue AI Racing Team" },
    { time: "4:10 PM - 4:50 PM", desc: "Panel: Robotics Roundtable" },
    { time: "4:50 PM - 5:00 PM", desc: "Closing Remarks" },
    { time: "5:00 PM", desc: "Event ends" },
];

function ScheduleDay() {
    return (
        <div class="lightbluebox">
            <img src={rise_graphic} alt="RISE Event" className="header-image"/>
            <table className="table">
                <tr className="table-internal">
                    <th >
                        Time
                    </th>
                    <th>
                        Event
                    </th>
                </tr>

                {events.map(({ time, desc }) => (
                    <tr className="table-internal">
                        <td>
                            <Time key={time} time={time} />
                        </td>
                        <td>
                            <Event key={desc} desc={desc} />

                        </td>
                    </tr>
                ))}
            </table>

        </div >
    );
}
export default ScheduleDay;
