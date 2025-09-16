import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/datavis">Data</NavLink>
      <NavLink to="/greentool">Tool</NavLink>
      <NavLink to="/resources">Resources</NavLink>
    </nav>
  );
};

export default Navbar;
