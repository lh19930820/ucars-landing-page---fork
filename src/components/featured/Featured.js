import React from 'react';
import './Featured.scss';
import Item from './item/Item';
import data from './_data/data';
import Slider from 'react-slick';

const Featured = () => {

    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
    }

    return (
        <section className="p-featured">
            <div className='container'>
                <div className='p-featured-headline'>
                    <div>
                        <h2 className="p-featured__title">Our Featured Vehicles.</h2>
                        <p className="p-featured__text">One of our biggest product to be featured<br /> and that has sold out the most.</p>
                    </div>
                    <button className='btn--primary u-border-radius-sm'>View More</button>
                </div>
                <div className="p-featured-list">
                    <Slider {...sliderSettings}>
                        {
                            data.map(item => <Item {...item} />)
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Featured