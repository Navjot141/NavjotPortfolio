import Project from "./Project";
import './portfolio.css'

const Projects = ({ projects }) => {
    return (
        <div className="portfolio_projects">
            {
                projects.map(project =>
                    <Project key={project.id} project={project} />
                )
            }
        </div>
    )
}

export default Projects;