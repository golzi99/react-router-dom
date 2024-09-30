import React from 'react';
import {adidasArr} from './Adidas';
import {useParams} from 'react-router-dom';

export const Model = () => {
    const params = useParams()
    const boots = adidasArr.find(boot => boot.id === Number(params.id))

    return (
        <div style={{textAlign: 'center'}}>
            <h2>{boots?.model}</h2>
            <h4>{boots?.collection}</h4>
            <h3>{boots?.price}</h3>
            <img
                src={boots?.picture}
                alt={boots?.model}
                style={{width: '600px', height: 'auto', marginRight: '10px'}}
            />
        </div>
    );
};