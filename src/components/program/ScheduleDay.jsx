import Event from "./Event";

const events = [
  { time: "9:00 AM", desc: "Event begins, Booths open" },
  { time: "10:05 AM", desc: "Keynote Speaker/Opening Remarks" },
  { time: "11:00 AM", desc: "Presentation" },
  { time: "11:20 AM", desc: "Presentation" },
  { time: "11:40 AM", desc: "Presentation" },
  { time: "12:00 PM", desc: "Lunch begins" },
  { time: "1:05 PM", desc: "Keynote Speaker" },
  { time: "2:00 PM", desc: "Presentation/End of Lunch Period" },
  { time: "2:20 PM", desc: "Presentation" },
  { time: "2:40 PM", desc: "Presentation" },
  { time: "3:00 PM", desc: "Presentation" },
  { time: "3:20 PM", desc: "Presentation" },
  { time: "3:40 PM", desc: "Presentation" },
  { time: "4:05 PM", desc: "Keynote Speaker/Closing Remarks" },
  { time: "5:00 PM", desc: "Event ends" },
];

function ScheduleDay() {
  return (
    <div class="lightbluebox">
      <h1>RISE | 3/30/2023 </h1>
      {events.map(({ time, desc }) => (
        <Event key={time} time={time} desc={desc} />
      ))}
    </div>
  );
}
export default ScheduleDay;
