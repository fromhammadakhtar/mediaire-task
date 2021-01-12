import React from 'react';
import './search.css';
import { Form, FormControl } from 'react-bootstrap';

const SearchContainer = (props) => {
  return (
    <div >
      <Form className='searchContainer'>
        <FormControl
          type='text'
          placeholder='Search'
          className='mr-sm-2'
          onChange={props.search}
        />
      </Form>

    </div>
  );
};

export default SearchContainer;
