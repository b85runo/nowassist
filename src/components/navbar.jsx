import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">Nowassist - ServiceNow tips</Link>
      <ul className="navbar__links">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Blogg</Link>
        </li>
        <li className="navbar__item">
          <Link to="/kontakt" className="navbar__link">Kontakt</Link>
        </li>
        <li className="navbar__item">
          <Link to="/om" className="navbar__link">Om</Link>
        </li>
      </ul>
    </nav>
  )
}