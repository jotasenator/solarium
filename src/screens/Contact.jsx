import React from 'react';
import { MyForm } from '../components';
import IntroText from '../components/IntroText';

const Contact = () => {
    return (
        <div id='contact-us' className='mx-4'>
            <IntroText name='contact' />
            <MyForm />
        </div>
    );
};

export default Contact;
