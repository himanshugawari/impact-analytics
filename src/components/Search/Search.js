import React, { useState } from 'react';
import './Search.css';

const Search = ({ setSearch }) => {
  const [str, setStr] = useState('');
  const onChange = (e) => {
    setStr(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (str === '') {
      alert('Please enter something');
    } else {
      setSearch(str);
      setStr('');
    }
  };
  const clearUsers = () => {
    setStr('');
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Candidate...'
          value={str}
          onChange={onChange}
        />
        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>
      {str.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
