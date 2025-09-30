import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardHome from "./components/DashboardHome";
import Projects from "./components/Projects";
import Events from "./components/Events";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Account from "./components/Account";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;