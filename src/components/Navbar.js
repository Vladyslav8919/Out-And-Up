import { socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h2 className="nav-title">Out & Up</h2>
        </div>
        <PageLinks parentClass="nav-links" itemClass="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map((link) => (
            <SocialLink key={link.id} {...link} itemClass="nav-icon" />
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
