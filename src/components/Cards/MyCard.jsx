import React from 'react';
import Card from 'react-bootstrap/Card';

const MyCard = ( { name, price } ) => {
    return (
        <Card className="mb-4 shadow-sm" style={ { width: '18rem' } }>
            <Card.Body>
                <Card.Title>{ name }</Card.Title>
                <Card.Text>
                    Price: { price }
                </Card.Text>
            </Card.Body>
        </Card >
    );
};

export default MyCard;
