import { useState } from "react";
import Project from "../components/Project";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { defaultCategory, projects as projectsData } from "../constants/data";
import { CategoryType, ProjectType } from "../constants/types";

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>(projectsData);
  const [active, setActive] = useState<CategoryType>(defaultCategory);

  const handleFilterCategory = (category: CategoryType) => {
    setActive(category);
    if (category === defaultCategory) {
      setProjects(projectsData);
      return;
    }
    const projectsFiltered = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(projectsFiltered);
  };

  return (
    <div className="px-5 py-3 overflow-y-scroll" style={{ height: "65vh" }}>
      <nav>
        <ProjectsNavbar handleFilterCategory={handleFilterCategory} />
      </nav>
      <div className="grid grid-cols-12 gap-4 my-3 relative">
        {projects.map((project, key) => (
          <div
            key={key}
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-2"
          >
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
