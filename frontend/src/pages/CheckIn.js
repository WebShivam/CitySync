import { useParams } from "react-router-dom";

export default function CheckIn() {
  const { eventId } = useParams();

  const handleCheckIn = () => {
    const checkIns = JSON.parse(localStorage.getItem("checkIns")) || [];
    checkIns.push({ eventId, timestamp: new Date().toISOString() });
    localStorage.setItem("checkIns", JSON.stringify(checkIns));
    alert("Check-in saved locally!");
  };

  return (
    <div>
      <h2>Event Check-in</h2>
      <button onClick={handleCheckIn}>Check In</button>
    </div>
  );
}