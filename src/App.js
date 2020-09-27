import React from 'react';
import './App.css';
import Header from './components/Header'
import SearchForm from './components/SearchForm/SearchForm';
import Table from './components/Table'

function App() {
  return (
    <div className="App">
        <Header/>
        <Table/>
    </div>
  );
}

export default App;
