import React from 'react';
import './Featured.scss';
import Item from './item/Item';
import data from './_data/data';
import Slider from 'react-slick';
import useIsMobile from 'hooks/useIsMobile';

const Featured = () => {
    const isMobile = useIsMobile();

    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <section className="p-featured">
            <div className='container'>
                <div className='p-featured-headline'>
                    <div>
                        <h2 className="p-featured__title u-no-wrap">Our Featured Vehicles.</h2>
                        <p className="p-featured__text">One of our biggest product to be featured and that has sold out the most.</p>
                    </div>
                    {
                        !isMobile && <button className='btn--primary u-border-radius-sm'>View More</button>
                    }
                </div>
                <div className="p-featured-list">
                    <Slider {...sliderSettings}>
                        {
                            data.map(item => <Item {...item} />)
                        }
                    </Slider>
                </div>
                {
                    isMobile && <button className='btn--primary u-border-radius-sm btn-sp'>View More</button>
                }
            </div>
        </section>
    )
}

export default Featured