import './portfolio.css';
import ProjectsCategories from './ProjectsCategories';
import Projects from './Projects';
import data from './data.js';
import { useState } from 'react';
const Portfolio = () => {
    const [projects, setProjects] = useState(data);

    const categories = data.map(item => item.category);
    const uniqueCategories = ["all", ...new Set(categories)];

    const filteredProjectsHandler = (category) => {
        if (category === 'all') {
            setProjects(data);
            return;
        }
        const filteredProjects = data.filter((project) => project.category === category);
        setProjects(filteredProjects);

    }

    return (
        <section id="portfolio">
            <h2>My Projects</h2>
            <p>Check out some of the projects I recently worked.
                Use the buttons to toggle the different categories
            </p>
            <div className="container portfolio_container">
                <ProjectsCategories categories={uniqueCategories} onFilterProjects={filteredProjectsHandler} />
                <Projects projects={projects} />
            </div>
        </section>
    )
}

export default Portfolio;