import Card from "../../components/Card";
import './portfolio.css'
const Project = ({ project }) => {
    return (
        <div>
            <Card className="portfolio_project">
                {/* <div className="portfolio_project-image">
                    <img src={project.image} alt="Portfolio Project Image" />
                </div> */}
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <div className="portfolio_project-cta">
                    <a href={project.github} className="btn sm primary" target="_blank" rel="noopner noreferrer">Github</a>
                </div>
            </Card>
        </div>
    )
}

export default Project;