import { NavLinks } from '../../utils/navLinks'
import './navBar.css'

const NavBar = () => {

  return (
    <nav className='nav-bar'>
        <ul className='nav-links'>
            {
                NavLinks.map(link => (
                    <a key={link.name} href={link.href} className='nav-link'>
                        <li>{link.name}</li>
                    </a>
                ))
            }
        </ul>
    </nav>
  )
}

export default NavBar
