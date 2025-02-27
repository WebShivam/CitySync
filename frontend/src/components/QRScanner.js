import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { supabase } from "../supabaseClient";

export default function QRScanner() {
  const [scanResult, setScanResult] = useState(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    scannerRef.current = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    });

    scannerRef.current.render(
      async (decodedText) => {
        setScanResult(decodedText);
        const eventId = decodedText.split("/").pop(); // Extract event ID from URL

        // Insert check-in record into Supabase
        const { error } = await supabase.from("checkins").insert({
          user_id: "USER_ID", // Replace with actual logged-in user ID
          event_id: eventId,
        });

        if (error) {
          console.error("Check-in failed:", error);
          alert("Check-in failed!");
        } else {
          alert("Check-in successful!");
        }
      },
      (errorMessage) => {
        console.error("QR Scan Error:", errorMessage);
      }
    );

    return () => scannerRef.current.clear();
  }, []);

  return (
    <div>
      <h2>Scan QR Code to Check In</h2>
      <div id="qr-reader"></div>
      {scanResult && <p>Scanned: {scanResult}</p>}
    </div>
  );
}