import React from 'react';
import './App.css';
import JobsList from './components/JobsList';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'

function App() {

  return (
    <div className="App">
    <h1 className="mt-2">Jobs</h1>
    <JobsList />
  </div>
  );
}

export default App;