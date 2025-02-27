import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Community Engagement App</h1>
      <p>Join events, check-in with QR codes, and connect with your community.</p>
      <Link to="/auth"><button>Login / Sign Up</button></Link>
    </div>
  );
}