import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Auth from "./components/Auth";
import Events from "./pages/Events";
import Home from "./pages/Home"; // We'll create this next

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;