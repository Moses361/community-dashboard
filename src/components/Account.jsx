import { useState } from "react";

function Account() {
  const [form, setForm] = useState({
    name: "Jane Doe",
    email: "jane@example.com",
    password: "",
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Account</h2>
      <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-6 mb-6">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Account"
          className="w-20 h-20 rounded-full border-2 border-[#2952e3]"
        />
        <div>
          <div className="text-lg font-semibold">{form.name}</div>
          <div className="text-gray-500">{form.email}</div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              className="border rounded px-3 py-2 w-full"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              className="border rounded px-3 py-2 w-full"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="border rounded px-3 py-2 w-full"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              placeholder="Enter new password"
            />
          </div>
          <button
            type="button"
            className="bg-[#2952e3] text-white px-4 py-2 rounded hover:bg-blue-900"
          >
            Update Account
          </button>
        </form>
      </div>
    </div>
  );
}
export default Account;