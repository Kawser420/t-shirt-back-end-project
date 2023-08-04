import React from 'react';
import Father from '../Father/Father';
import Mother from '../Mother/Mother';
import Aunty from '../Aunty/Aunty';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

const Grandpa = () => {
    const ring = 'diamond';
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Mother></Mother>
                <Aunty></Aunty>
                <Uncle ring={ring}></Uncle>
            </section>
        </div>
    );
};

export default Grandpa;