import React from 'react';
import { RenderCards, Slide } from '../components';
import IntroText from '../components/IntroText';

const Home = () => {
    return (
        <div id='home' className='mx-4'>
            <IntroText name='home' />
            <Slide />
            <RenderCards />

        </div>
    );
};

export default Home;
