import {QRCodeCanvas} from "qrcode.react";

export default function QRGenerator({ eventId }) {
  if (!eventId) return <p>No Event Selected</p>;

  const checkInURL = `https://localhost:3000/checkin/${eventId}`;

  return (
    <div>
      <h3>Scan to Check In</h3>
      <QRCodeCanvas value={checkInURL} size={200} />
    </div>
  );
}