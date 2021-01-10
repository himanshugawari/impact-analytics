import React from 'react';
import { useHistory } from 'react-router-dom';
import './Card.css';

const Card = ({ id, name, img, check }) => {
  let history = useHistory();
  return (
    <div className='profile'>
      <img className='profile__image' src={img} alt={name} />
      <div className='profile__name'>{name}</div>
      {!check && (
        <button
          className='btn btn-block btn-dark'
          onClick={() => history.push(`/candidate/${id}`)}
        >
          View
        </button>
      )}
    </div>
  );
};

export default Card;
