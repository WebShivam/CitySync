import {QRCodeCanvas} from "qrcode.react";

export default function QRGenerator({ eventId }) {
  if (!eventId) return <p>No Event Selected</p>;

  const localIP ="192.168.195.185";
  const checkInURL = `https://${localIP}:3000/checkin/${eventId}`;

  return (
    <div>
      <h3>Scan to Check In</h3>
      <QRCodeCanvas value={checkInURL} size={200} />
    </div>
  );
}