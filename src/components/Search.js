import React from 'react';
import './search.css';
import { Form, FormControl } from 'react-bootstrap';

const SearchContainer = (props) => {
  return (
    <div className='search'>
      <span className='fa fa-search'></span>
      <input onChange={props.search} placeholder='Search for a topic…' />
    </div>
  );
};

export default SearchContainer;
