import { useState } from "react";

function Settings() {
  const [profile, setProfile] = useState({
    name: "Jane Doe",
    email: "jane@example.com",
  });
  const [account, setAccount] = useState({
    password: "",
    notifications: true,
  });
  const [updated, setUpdated] = useState(false);

  function handleUpdate() {
    setUpdated(true);
    setTimeout(() => setUpdated(false), 2000);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Profile</h3>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            className="border rounded px-3 py-2 w-full"
            value={profile.name}
            onChange={e => setProfile({ ...profile, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            className="border rounded px-3 py-2 w-full"
            value={profile.email}
            onChange={e => setProfile({ ...profile, email: e.target.value })}
          />
        </div>
      </div>

      {/* Account Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Account</h3>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="border rounded px-3 py-2 w-full"
            value={account.password}
            onChange={e => setAccount({ ...account, password: e.target.value })}
            placeholder="Enter new password"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={account.notifications}
            onChange={e => setAccount({ ...account, notifications: e.target.checked })}
            className="mr-2"
          />
          <span className="font-medium">Enable notifications</span>
        </div>
        <button
          onClick={handleUpdate}
          className="bg-[#2952e3] text-white px-4 py-2 rounded hover:bg-blue-900 flex items-center"
        >
          Update
          {updated && (
            <svg
              className="w-5 h-5 ml-2 text-green-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default Settings;