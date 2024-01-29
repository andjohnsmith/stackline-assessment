import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Sales from './features/sales/Sales';
import { useAppDispatch } from './app/hooks';
import { fetchSales } from './features/sales/salesSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSales())
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Sales />
    </div>
  );
}

export default App;
