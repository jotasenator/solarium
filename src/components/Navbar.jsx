import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar bg-main-color">
        <div>
            <p>Solarium</p>
        </div>
        <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/business">Business</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
    </nav>
);

export default Navbar;