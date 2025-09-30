// src/components/Projects.jsx
import { useLocation } from "react-router-dom";
import projects from "../data/projects";

function Projects() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const filter = params.get("filter");

  let filteredProjects = projects;
  let title = "All Projects";

  if (filter === "ongoing") {
    filteredProjects = projects.filter(
      (p) => p.status.toLowerCase() === "ongoing"
    );
    title = "Ongoing Projects";
  } else if (filter === "onhold") {
    filteredProjects = projects.filter(
      (p) => p.status.toLowerCase() === "on hold"
    );
    title = "On Hold Projects";
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="pb-2">Name</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project, idx) => (
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

export default Projects;
