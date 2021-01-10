import React from 'react';
import Cards from '../Cards/Cards';
import './Shortlisted.css';

const Shortlisted = ({ state }) => {
  return (
    <>
      {state.length === 0 && <h1>No candidate shortlisted</h1>}
      <Cards state={state} check={true} />;
    </>
  );
};

export default Shortlisted;
