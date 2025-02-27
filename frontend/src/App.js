import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const { data, error } = await supabase.from("users").select("*");
      if (error) {
        console.error("Error fetching users:", error.message);
      } else {
        console.log("Users fetched:", data);
        setUsers(data);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Supabase Connection Test</h1>
      <ul>
        {users.length === 0 ? <p>No users found</p> : 
          users.map((user) => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;