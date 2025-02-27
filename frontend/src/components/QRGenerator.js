import { QRCodeCanvas } from "qrcode.react";

export default function QRGenerator({ eventId }) {
  if (!eventId) return <p>No Event Selected</p>;

  // Use correct URL: Change to deployed link after deployment
  const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
  const checkInURL = `${BASE_URL}/checkin/${eventId}`;

  return (
    <div>
      <h3>Scan to Check In</h3>
      <QRCodeCanvas value={checkInURL} size={200} />
    </div>
  );
}