import React, { useState, useRef } from 'react';
import useOutsideClick from 'hooks/useOutsideClick';
const SelectBox = ({children, title, placeholder}) => {
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const select = useRef();
  useOutsideClick(select, () => {
		setShowStateDropdown(false);
	});
  return (
    <div className={`category ${showStateDropdown && 'active'}`}>
      <p className='category__title'>{title}</p>
      <div ref={select} className='category__placeholder' onClick={() => setShowStateDropdown(!showStateDropdown)}><span  dangerouslySetInnerHTML={{__html: placeholder}} />
        {
          children
        }
      </div>
    </div>
  )
}

export default SelectBox