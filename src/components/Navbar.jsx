import { Link } from "react-scroll";

const Navbar = () => (
    <nav className="navbar bg-main-color ">
        <div>
            <p>Solarium</p>
        </div>
        <ul className="links">
            <li><Link to="home" spy={ true } smooth={ true } offset={ -70 }>Home</Link></li>
            <li><Link to="business" spy={ true } smooth={ true } offset={ -70 }>Business</Link></li>
            <li><Link to="contact-us" spy={ true } smooth={ true } offset={ -70 }>Contact Us</Link></li>
        </ul>
    </nav>
);

export default Navbar;