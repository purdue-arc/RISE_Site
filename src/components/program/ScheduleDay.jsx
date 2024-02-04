const events = [
    { time: "9:00 AM", desc: "" },
    { time: "9:30 AM", desc: "3/30/2023" },
    { time: "10:00 AM", desc: "3/30/2023" },
    { time: "10:30 AM", desc: "3/30/2023" },
    { time: "11:00 AM", desc: "3/30/2023" },
    { time: "11:30 AM", desc: "3/30/2023" },
    { time: "12:00 PM", desc: "3/30/2023" },
    { time: "12:30 PM", desc: "3/30/2023" },
    { time: "1:00 PM", desc: "3/30/2023" },
    { time: "1:30 PM", desc: "3/30/2023" },
    { time: "2:00 PM", desc: "3/30/2023" },
    { time: "2:30 PM", desc: "3/30/2023" },
];


/*
9:00 AM
10:05 AM
11:00 AM
11:20 AM
11:40 AM
12:00 PM
1:05 PM
2:00 PM
2:20 PM
2:40 PM
3:00 PM
3:20 PM
3:40 PM
4:05 PM
5:00 PM
Event begins, Booths open
Keynote Speaker/Opening Remarks
Presentation
Presentation
Presentation
Presentation/End of Lunch Period
Presentation
Presentation
Presentation
Presentation
Presentation
Keynote Speaker/Closing Remarks
Event ends
Keynote Speaker
Lunch begins
*/

function ScheduleDay() {

    return (
        <div class="lightbluebox">
            <link rel="stylesheet" href="../program/css/table.css" />
            <h1>RISE | 3/30/2023 </h1>
            <table class="table">
                <tr>
                    <th>Time</th>
                    <th>Event</th>
                </tr>
            </table>
        </div>
    );
}
export default ScheduleDay;