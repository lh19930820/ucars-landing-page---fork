import React from 'react';
import './Categories.css';
import State from './state/State';
import Price from './price/Price';
import Type from './type/Type';

const Categories = () => {
  return (
    <div className='categories'>
      <form action="#" className='search-form'>
        <div className='category'>
          <p className='category__title'>New/ Used </p>
          <span className='category__placeholder'>New Cars</span>
          <State/>
        </div>
        <div className='category'>
          <p className='category__title'>Price Range </p>
          <span className='category__placeholder'>
            <span className="min">10,0000</span> --
            <span className="max">100,0000</span>
          </span>
          <Price/>
        </div>
        <div className='category'>
          <p className='category__title'>Vehicle Type </p>
          <span className='category__placeholder'>Duplex</span>
          <Type/>
        </div>
        <button type='submit' className='category__btn btn--primary u-border-radius-sm'>Search</button>
      </form>
    </div>
  )
}

export default Categories