import React from 'react';
import { Accordion } from '../components';
import IntroText from '../components/IntroText';

const Business = () => {
    return (
        <div id='business'>
            <IntroText name='business' />
            <Accordion />
        </div>
    );
};

export default Business;
