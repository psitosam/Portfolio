import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoA from '../../assets/images/alexlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faGear, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import{faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoA} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
          <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
      <li>
        <a href="https:/github.com/psitosam" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/alex-psitos-5429a1232/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
        
      </ul>
  </div>
)

export default Sidebar 