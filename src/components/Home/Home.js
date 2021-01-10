import React from 'react';
import Cards from '../Cards/Cards';
import Search from '../Search';
import './Home.css';

const Home = ({ state, setSearch }) => {
  return (
    <>
      <Search setSearch={setSearch} />
      <div style={{ marginTop: '20px' }}>
        <Cards state={state} />;
      </div>
    </>
  );
};

export default Home;
