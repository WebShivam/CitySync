import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error("Signup Error:", error.message);
      alert(error.message);
    } else {
      alert("Check your email for confirmation!");
      console.log("User signed up:", data);
    }
  };

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error("Login Error:", error.message);
      alert(error.message);
    } else {
      alert("Logged in successfully!");
      console.log("User logged in:", data);
    }
  };

  return (
    <div>
      <h2>Login / Sign Up</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Login</button>
    </div>
  );
}