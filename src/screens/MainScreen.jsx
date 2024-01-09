import React from 'react';
import { Element } from 'react-scroll';
import { Home, Business, Contact } from '../screens';

const MainScreen = () => {
    return (
        <div>
            <Element name="home">
                <Home />
            </Element>

            <Element name="business">
                <Business />
            </Element>

            <Element name="contact-us">
                <Contact />
            </Element>
        </div>
    );
};

export default MainScreen;
