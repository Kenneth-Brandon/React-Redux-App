import React from 'react';

import './App.css';

import DrinkForm from './components/DrinkForm';
import Drinks from './components/Drinks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="drinklist">
          <h1>Barrel Fever</h1>
          <h2>
            On the water wagon?
            <br />
            'Bend an elbow'
          </h2>
          <DrinkForm />
          <Drinks />
        </div>
      </header>
    </div>
  );
}

export default App;
