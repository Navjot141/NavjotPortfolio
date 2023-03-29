import './footer.css'
import { links, socials } from './data'

const Footer = () => {
    return (
        <footer>
            <div className="container footer_container">
                <ul className='nav_menu'>
                    {
                        links.map(flink => <li key={flink.id}>
                            <a href={flink.link}>{flink.title}</a>
                        </li>)
                    }
                </ul>
                <div className="footer_socials">
                    {
                        socials.map(social => <a key={social.id} href={social.link} target="_blank" rel='noopener noreferrer'>
                            {social.icon}
                        </a>)
                    }
                </div>
            </div>
            <div className="footer_copyright">
                <small>2023 Navjot Nagra &copy; All Rights Reserved</small>
            </div>
        </footer>
    )
}

export default Footer;