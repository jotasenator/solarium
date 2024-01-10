import { useEffect, useState } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
    const [ offset, setOffset ] = useState( -70 );

    useEffect( () => {
        const handleResize = () => {
            if ( window.innerWidth <= 768 ) { // 768px is typically the breakpoint for mobile devices
                setOffset( -130 );
            } else {
                setOffset( -70 );
            }
        };

        // Attach the event listener
        window.addEventListener( 'resize', handleResize );

        // Call the handleResize function to set the initial offset
        handleResize();

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener( 'resize', handleResize );
        };
    }, [] );


    return (
        <nav className="navbar bg-main-color ">
            <div>
                <p>Solarium</p>
            </div>
            <ul className="links">
                <li><Link to="home" spy={ true } smooth={ true } offset={ offset }>Home</Link></li>
                <li><Link to="business" spy={ true } smooth={ true } offset={ offset }>Business</Link></li>
                <li><Link to="contact-us" spy={ true } smooth={ true } offset={ offset }>Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;