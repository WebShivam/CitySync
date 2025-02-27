import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function CheckIn() {
  const { eventId } = useParams();
  const [user, setUser] = useState(null);

  // Fetch logged-in user on page load
  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Auth error:", error);
      } else {
        setUser(data?.user);
      }
    }
    getUser();
  }, []);

  const handleCheckIn = async () => {
    if (!user) {
      alert("Please log in to check in.");
      return;
    }

    console.log("User ID:", user.id);
    console.log("Event ID:", eventId);

    // Insert check-in record into Supabase
    const { error } = await supabase.from("checkins").insert([
      { user_id: user.id, event_id: eventId },
    ]);

    if (error) {
      console.error("Check-in failed:", error);
      alert("Check-in failed: " + error.message);
    } else {
      alert("Checked in successfully!");
    }
  };

  return (
    <div>
      <h2>Event Check-in</h2>
      <button onClick={handleCheckIn} className="px-6 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-700">
        Check In
      </button>
    </div>
  );
}