import React from 'react';
import Card from '../Card/Card';
import './Cards.css';

const Cards = ({ state, check }) => {
  return (
    <div className='cards'>
      {state.map((item) => {
        return (
          <Card
            key={item.id}
            img={item.Image}
            name={item.name}
            id={item.id}
            check={check}
          />
        );
      })}
    </div>
  );
};

export default Cards;
