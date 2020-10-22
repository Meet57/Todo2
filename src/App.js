import React from 'react';
import './App.css';
import { MainTable } from './components/MainTable';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <SearchBar />
      <MainTable />
    </div>
  );
}

export default App;
