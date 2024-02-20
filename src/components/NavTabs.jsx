import { Link, useLocation } from 'react-router-dom';


function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs" id="navbar">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li>
        <p id="bradh">Brad Hutchison</p>
        <p id="iac">innovation and Creativity</p>
      </li>
    </ul>
  );
}

export default NavTabs;