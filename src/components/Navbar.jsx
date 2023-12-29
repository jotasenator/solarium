import { Link } from "react-router-dom";

const Navbar = () => (
    <nav>
        <div>
            <p>Solarium</p>
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/business">Business</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
    </nav>
);

export default Navbar;