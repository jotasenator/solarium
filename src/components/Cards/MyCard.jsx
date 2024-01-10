import React from 'react';
import Card from 'react-bootstrap/Card';

const MyCard = ( { name, price } ) => {
    return (
        <Card className="  mb-4 shadow-sm" style={ { width: '18rem' } }>

            <Card.Body className='card' style={ { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' } }>
                <Card.Title className='text-light'>{ name }</Card.Title>
                <Card.Text className=' text-success d-flex justify-content-end'>
                    Price: { price }
                </Card.Text>
            </Card.Body>
        </Card >
    );
};

export default MyCard;
