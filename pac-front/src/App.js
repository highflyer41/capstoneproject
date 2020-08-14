import React from 'react';
import logo from './logo.svg';
import './App.css';
import ActivityComponent from './components/ActivityComponent';
import AddActivityComponent from './components/AddActivityComponent';

function App() {
  return (
    <div className="App">
      <ActivityComponent />
      <AddActivityComponent />
    </div>
  );
}

export default App;
