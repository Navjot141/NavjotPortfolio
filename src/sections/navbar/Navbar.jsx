import './navbar.css'
import Navjot from '../../assets/Navjotk.jpg';
import data from './data';

const Navbar = () => {
    return (
        <nav>
            <div className='container nav_container'>
                <a href='index.html' className='nav_logo'>
                    <img src={Navjot} alt="Navjotk" />
                </a>
                <ul className='nav_menu'>
                    {
                        data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
                    }
                </ul>
                {/* <button id='theme_icon'><IoIosColorPalette /></button> */}
            </div>
        </nav>
    )
}

export default Navbar;