import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkAuth() {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) setUser(data.user);
    }
    checkAuth();
  }, []);

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert("Check your email for confirmation!");
  };

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else alert("Logged in successfully!");
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    alert("Logged out!");
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <h2>Login / Sign Up</h2>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSignUp}>Sign Up</button>
          <button onClick={handleSignIn}>Login</button>
        </div>
      )}
    </div>
  );
}