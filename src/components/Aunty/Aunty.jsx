import React from 'react';
import Cousin from '../Mother/Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin>Kamal</Cousin>
                <Cousin>Jamal</Cousin>
            </section>
        </div>
    );
};

export default Aunty;