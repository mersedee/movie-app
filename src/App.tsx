import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import './App.scss';

import HomePage from './pages/Home';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <HomePage />
      </div>
    </GlobalProvider>
  );
}

export default App;
