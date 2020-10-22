import React from 'react';
import './App.css';
import { MainTable } from './components/MainTable';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { TodoContextProvider } from './context/TodoContext';

function App() {
  return (
    <div className="container">
      <TodoContextProvider>
        <Navbar />
        <SearchBar />
        <MainTable />
      </TodoContextProvider>
    </div>
  );
}

export default App;
