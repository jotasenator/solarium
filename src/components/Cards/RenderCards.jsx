import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyCard from './MyCard';

const RenderCards = () => {
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
        <div className="d-flex flex-wrap justify-content-around">
            { data.map( item => (
                <MyCard key={ item.id } name={ item.name } price={ item.email } />
            ) ) }
        </div>
    );
};

export default RenderCards;
