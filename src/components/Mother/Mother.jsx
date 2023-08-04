import React from 'react';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import Myself from '../Myself/Myself';

const Mother = () => {
    return (
        <div>
            <h2>Mother</h2>
            <section className='flex'>
                <Brother></Brother>
                <Sister></Sister>
                <Myself></Myself>
            </section>
        </div>
    );
};

export default Mother;