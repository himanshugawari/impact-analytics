import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Candidate from './components/Candidate';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound';
import Rejected from './components/Rejected';
import Shortlisted from './components/Shortlisted';

function App() {
  const [allCandidates, setAllcandidates] = useState([]);
  const [filteredCandidates, setfilteredCandidates] = useState([]);
  const [shortlisted, setShortlisted] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [search, setSearch] = useState('');
  const [candidate, setCandidate] = useState({});

  useEffect(() => {
    fetch(
      'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json'
    )
      .then((response) => response.json())
      .then((result) => {
        setAllcandidates(result);
        // setfilteredCandidates(result);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const temp = allCandidates.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    // console.log(temp);
    // console.log(search);
    setfilteredCandidates(temp);
  }, [search]);

  console.log('shortlisted', shortlisted);
  console.log('rejected', rejected);

  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route
            exact
            path='/candidate/:id'
            render={(props) => (
              <Candidate
                state={allCandidates}
                id={props.match.params.id}
                setShortlisted={setShortlisted}
                setRejected={setRejected}
                shortlisted={shortlisted}
                rejected={rejected}
              />
            )}
          />
          <Route
            exact
            path='/shortlisted'
            render={() => <Shortlisted state={shortlisted} />}
          />
          <Route
            exact
            path='/rejected'
            render={() => <Rejected state={rejected} />}
          />
          <Route
            exact
            path='/'
            render={() => (
              <Home
                state={search.length > 0 ? filteredCandidates : allCandidates}
                setSearch={setSearch}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
