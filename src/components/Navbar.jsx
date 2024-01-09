import { Link } from "react-scroll";

const Navbar = () => (
    <nav className="navbar bg-main-color">
        <div>
            <p>Solarium</p>
        </div>
        <ul className="navbar">
            <li><Link to="home" spy={ true } smooth={ true }>Home</Link></li>
            <li><Link to="business" spy={ true } smooth={ true }>Business</Link></li>
            <li><Link to="contact-us" spy={ true } smooth={ true }>Contact Us</Link></li>
        </ul>
    </nav>
);

export default Navbar;