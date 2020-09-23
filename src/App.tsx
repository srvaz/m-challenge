import './App.scss';

import { MText, TEXT_VARIANT } from './components/MText';
import React, { useState } from 'react';

import { MAppBar } from './components/MAppBar';
import { MDatePicker } from './components/MDatePicker';

function App() {
  const [dateValue, onChangeDate] = useState(new Date());
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

      <MDatePicker
        value={dateValue}
        onChange={onChangeDate}
      />
    </div>
  );
}

export default App;
