import React from 'react';
import Cousin from '../Mother/Cousin/Cousin';

const Uncle = ({ring}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin>Hafiz</Cousin>
                <Cousin hasFriend={true} ring={ring}>Zamila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;