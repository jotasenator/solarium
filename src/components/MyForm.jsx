import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MyForm = () => {
    const [ validated, setValidated ] = useState( false );

    const handleSubmit = ( event ) => {
        const form = event.currentTarget;
        if ( form.checkValidity() === false ) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated( true );
    };
    return (
        <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="email@domain.com" />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                <Form.Control required as="textarea" rows={ 3 } placeholder='...say hello !!!' />
                <Form.Control.Feedback type="invalid">
                    Please provide a text.
                </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
    );
};

export default MyForm;
