import data from './data.js'
import { useState } from 'react'
import CategoryButton from './CategoryButton'
const ProjectsCategories = ({ categories, onFilterProjects }) => {
    const [activeCategory, setActiveCategory] = useState('all');

    const changeCategoryHandler = (activeCat) => {
        setActiveCategory(activeCat);
        onFilterProjects(activeCat);
    }

    return (
        <div className="portfolio_categories">
            {
                categories.map((category) =>
                    <CategoryButton key={category} category={category} onChangeCategory={() => {
                        changeCategoryHandler(category)
                    }
                    } className={`btn cat_btn  ${activeCategory === category ? 'primary' : 'white'}`} />
                )
            }
        </div>
    )
}

export default ProjectsCategories;