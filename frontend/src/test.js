import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      const { data, error } = await supabase.from("events").select("*");
      if (error) {
        console.error("Error fetching events:", error);
      } else {
        console.log("Events fetched:", data);
        setEvents(data);
      }
      setLoading(false);
    }
    fetchEvents();
  }, []);

  if (loading) return <h2>Loading events...</h2>;

  return (
    <div>
      <h2>Upcoming Events</h2>
      {events.length === 0 ? <p>No events available</p> : 
        events.map((event) => (
          <div key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
          </div>
        ))
      }
    </div>
  );
}