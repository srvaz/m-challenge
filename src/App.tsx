import './App.scss';

import { MText, TEXT_VARIANT } from './components/MText';

import { MAppBar } from './components/MAppBar';
import React from 'react';

function App() {
  return (
    <div className="App">
      <MAppBar
        menuItems={[
          { label: 'Home', path: '#' },
          { label: 'Agendar', path: '#' },
          { label: 'Agendamentos', path: '#' },
        ]}
        className="App__app-bar"
      />
      <MText
        variant={TEXT_VARIANT.TITLE}
        tag="h1"
      >
        Hello, World! <span role="img" aria-label="emoji party">🎉</span>
      </MText>
    </div>
  );
}

export default App;
