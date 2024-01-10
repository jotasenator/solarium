import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import MyAccordion from './MyAccordion';
import axios from 'axios';


const RenderAccordions = () => {
    const [ data, setData ] = useState( [] );

    useEffect( () => {

        axios.get( 'https://jsonplaceholder.typicode.com/comments' )
            .then( response => {
                setData( response.data );
            } )
            .catch( error => {
                console.error( 'There was an error!', error );
            } );
    }, [] );

    return (
        <Accordion defaultActiveKey="0" flush  >
            { data.map( ( item ) => ( <MyAccordion key={ item.id } eventKey={ ( item.id - 1 ).toString() } header={ item.name } body={ item.email } /> ) ) }

        </Accordion>
    );
};

export default RenderAccordions;
