import React from 'react';
import Profile from './Profile/Profile';
import './App.css';

function App() {
  const handleName = (name) => {
    alert(`Hello ${name}`);
  };

  return (
    <div className="App">
      <Profile fullName="Wissem Elayeb" bio="I'm a software engineer" profession="Developer" handleName={handleName}>
        <img src="https://via.placeholder.com/150" alt="Profilepic" />
      </Profile>

    </div>
  );
}

export default App;
