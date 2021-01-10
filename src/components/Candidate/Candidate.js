import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Candidate.css';

const Candidate = ({
  id,
  state,
  setRejected,
  setShortlisted,
  shortlisted,
  rejected,
}) => {
  const [candidate, setCandidate] = useState({});
  useEffect(() => {
    const temp = state.filter((item) => item.id === id);
    setCandidate(temp[0]);
  }, [id, state]);
  let history = useHistory();
  //   console.log('candidate', candidate);
  const onShortlist = () => {
    let check = rejected.filter((item) => item.id === candidate.id);
    if (check.length > 0) {
      alert(`${candidate.name} is already rejected`);
      return;
    }
    let test = shortlisted.filter((item) => item.id === candidate.id);
    if (test.length > 0) {
      setShortlisted([...shortlisted]);
    } else {
      setShortlisted([...shortlisted, candidate]);
    }
    // setShortlisted([...shortlisted, candidate]);
    history.push(`/`);
    // history.push(`/shortlisted`);
  };
  const onReject = () => {
    let check = shortlisted.filter((item) => item.id === candidate.id);
    if (check.length > 0) {
      alert(`${candidate.name} is already shortlisted`);
      return;
    }
    let test = rejected.filter((item) => item.id === candidate.id);
    if (test.length > 0) {
      setRejected([...rejected]);
    } else {
      setRejected([...rejected, candidate]);
    }
    history.push(`/`);
    // history.push(`/rejected`);
  };
  return (
    <div className='profile'>
      <img
        className='profile__image'
        src={candidate.Image}
        alt={candidate.name}
      />
      <div className='profile__name'>{candidate.name}</div>
      <button className='btn btn-block btn-dark' onClick={onShortlist}>
        Shortlist
      </button>
      <button className='btn btn-block btn-light' onClick={onReject}>
        Reject
      </button>
    </div>
  );
};

export default Candidate;
