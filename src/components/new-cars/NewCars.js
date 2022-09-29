import React from 'react';
import './NewCars.css';
import Categories from './categories/Categories';

const NewCars = () => {
    return (
        <section className='p-new-cars'>
            <div className="container">
                <Categories />
            </div>
        </section>
    )
}

export default NewCars