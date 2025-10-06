import { Link } from "react-router-dom";
import projects from "../data/projects";

const ongoingCount = projects.filter(
  (p) => p.status.toLowerCase() === "ongoing"
).length;
const onHoldCount = projects.filter(
  (p) => p.status.toLowerCase() === "on hold"
).length;

function DashboardHome() {
  return (
    <div className="px-2 md:px-0">
      <h1 className="text-3xl font-bold mb-2 flex items-center">
        <span className="mr-2">🚀</span> Welcome to the Dashboard
      </h1>
      <p className="text-gray-600 mb-6">
        This is the starting point of your project.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Link
          to="/projects"
          className="bg-white rounded-lg shadow p-6 text-center cursor-pointer transition hover:bg-[#2952e3] hover:text-white block"
        >
          <div className="text-3xl font-bold">{projects.length}</div>
          <div className="text-gray-500 group-hover:text-white">Projects</div>
        </Link>
        <Link
          to="/projects?filter=ongoing"
          className="bg-[#2952e3] rounded-lg shadow p-6 text-center text-white cursor-pointer transition hover:bg-blue-900 block"
        >
          <div className="text-3xl font-bold">{ongoingCount}</div>
          <div>Ongoing</div>
        </Link>
        <Link
          to="/projects?filter=onhold"
          className="bg-white rounded-lg shadow p-6 text-center cursor-pointer transition hover:bg-[#2952e3] hover:text-white block"
        >
          <div className="text-3xl font-bold">{onHoldCount}</div>
          <div className="text-gray-500 group-hover:text-white">On hold</div>
        </Link>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
        <table className="w-full min-w-[400px] text-left">
          <thead>
            <tr>
              <th className="pb-2">Name</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {projects.slice(0, 3).map((project, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-2">{project.name}</td>
                <td className="py-2">{project.status}</td>
                <td className="py-2">{project.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardHome;