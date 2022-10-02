import React from 'react';
import './Categories.scss';
import State from './state/State';
import Price from './price/Price';
import useOutsideClick from 'hooks/useOutsideClick';
import SelectBox from 'components/select-box/SelectBox';
const Categories = () => {

  return (
    <div className='categories'>
      <form action="#" className='search-form'>
        <SelectBox title="New/ Used" placeholder="New/ Used ">
          <State title=""/>
        </SelectBox>
        <SelectBox title="Price Range" placeholder='<span className="min">&#36;10,0000</span>
            <span className="max">&#36;100,0000</span>' >
          <Price />
        </SelectBox>
        <SelectBox title="Vehicle Type " placeholder="Duplex" >
          <Price />
        </SelectBox>
        <button type='submit' className='category__btn btn--primary u-border-radius-sm'>Search</button>
      </form>
    </div>
  )
}

export default Categories