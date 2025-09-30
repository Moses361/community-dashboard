import { FaTachometerAlt, FaFolder, FaCalendarAlt, FaCog } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { to: "/", icon: <FaTachometerAlt />, label: "Dashboard" },
    { to: "/projects", icon: <FaFolder />, label: "Projects" },
    { to: "/events", icon: <FaCalendarAlt />, label: "Events" },
    { to: "/settings", icon: <FaCog />, label: "Settings" },
  ];

  return (
    <aside className="w-64 bg-[#232e3b] text-white h-screen p-6">
      <div className="mb-8 text-2xl font-bold tracking-wide">Menu</div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li className="mb-2" key={item.to}>
              <Link
                to={item.to}
                className={`flex items-center px-3 py-2 rounded-lg font-semibold transition ${
                  location.pathname === item.to
                    ? "bg-[#2952e3] text-white"
                    : "hover:bg-[#2d3a4a] text-white"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;