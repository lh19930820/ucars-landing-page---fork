import React from 'react';
import './NewCars.css';
import Categories from './categories/Categories';
import Car from './car/Car';
import data from './_data/data';
import newRideImg from 'assets/images/getting_new_ride.jpg';

const NewCars = () => {
    return (
        <section className='p-new-cars'>
            <Categories />
            <div className="container">
                <div className='cars-list'>
                    <div>
                        <img src={newRideImg} alt="" width="281" height="361"/>
                    </div>
                    {
                        data.map(car => <Car {...car}/>)
                    }
                </div>
                <button className='btn-more'>View more new cars</button>
            </div>
        </section>
    )
}

export default NewCars