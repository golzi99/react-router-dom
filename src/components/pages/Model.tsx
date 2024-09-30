import React from 'react';
import {adidasArr, AdidasItem} from './Adidas';
import {useParams} from 'react-router-dom';
import {pumaArr, PumasItem} from './Puma';

type CrossModels = {
    [key: string]: Array<AdidasItem|PumasItem>
}

const crossModel: CrossModels = {
    puma: pumaArr,
    adidas: adidasArr
}

export const Model = () => {
    const {model, id} = useParams()
    const boots = model && crossModel[model].find(boot => boot.id === Number(id))

    return (
        <div style={{textAlign: 'center'}}>
            {boots ?
                <div>
                    <h2>{boots.model}</h2>
                    <h4>{boots.collection}</h4>
                    <h3>{boots.price}</h3>
                    <img
                        src={boots.picture}
                        alt={boots.model}
                        style={{width: '600px', height: 'auto', marginRight: '10px'}}
                    />
                </div>
                : <h2>Такой модели не существует</h2>
            }
        </div>

    );
};