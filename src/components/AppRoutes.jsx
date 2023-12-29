import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import { Home, Business, Contact } from '../screens';

const AppRoutes = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route path="/business" element={ <Business /> } />
                <Route path="/contact-us" element={ <Contact /> } />
            </Routes>

            <Footer />
        </Router>
    );
};

export default AppRoutes;
