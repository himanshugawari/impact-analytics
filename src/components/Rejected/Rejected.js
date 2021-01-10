import React from 'react';
import Cards from '../Cards/Cards';
import './Rejected.css';

const Rejected = ({ state }) => {
  return (
    <>
      {state.length === 0 && <h1>No candidate rejected</h1>}
      <Cards state={state} check={true} />;
    </>
  );
};

export default Rejected;
