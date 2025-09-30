import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { to: "/", label: "Dashboard" },
    { to: "/projects", label: "Projects" },
    { to: "/events", label: "Events" },
    { to: "/settings", label: "Settings" },
  ];

  function handleLogout() {
    setOpen(false);
    navigate("/");
  }

  return (
    <nav className="bg-[#1a2236] shadow px-8 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-white">
        <Link to="/">🚀 Project Dashboard</Link>
      </div>
      <div className="flex items-center space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`font-medium px-3 py-2 rounded transition ${
              location.pathname === item.to
                ? "bg-[#2952e3] text-white"
                : "text-white hover:bg-[#232e3b]"
            }`}
          >
            {item.label}
          </Link>
        ))}
        {/* Profile Icon with Dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="focus:outline-none"
            aria-label="Open profile menu"
          >
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-white hover:ring-2 hover:ring-blue-400 transition"
            />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg py-2 z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Profile
              </Link>
              <Link
                to="/account"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Account
              </Link>
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;