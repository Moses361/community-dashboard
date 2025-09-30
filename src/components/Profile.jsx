function Profile() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-6">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-[#2952e3]"
        />
        <div>
          <div className="text-lg font-semibold">Jane Doe</div>
          <div className="text-gray-500">jane@example.com</div>
          <div className="mt-2 text-sm text-gray-400">Member since 2024</div>
        </div>
      </div>
    </div>
  );
}
export default Profile;