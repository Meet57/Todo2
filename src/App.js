import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <SearchBar />
    </div>
  );
}

export default App;
