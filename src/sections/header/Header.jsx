import './header.css'
import navjot from '../../assets/navjot.jpg';
import data from './data';

const Header = () => {
    return (
        <header id="header">
            <div className='container header_container'>
                <div className='header_profile'>
                    <img src={navjot} alt='Header Portrait' />
                </div>
                <h3>Navjot Nagra</h3>
                <p>
                    Well-versed Software Developer with 5+ years of experience who is comfortable developing enterprise and commercial Web Applications
                </p>
                <div className="header_cta">
                    <a href="#contact" className='btn primary'>Contact Me!</a>
                    <a href="#portfolio" className='btn light'>My Work</a>
                </div>
                <div className="header_socials">
                    {
                        data.map(item => <a key={item.id} href={item.link} target="_blank" rel='noopener noreferrer' >
                            {item.icon}
                        </a>)
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;