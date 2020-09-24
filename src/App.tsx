import './App.scss';

import { MAppBar } from './components/MAppBar';
import React from 'react';

function App() {
  // const [dateValue, onChangeDate] = useState(new Date());
  // const [timeValue, onChangeTime] = useState(new Date());

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
    </div>
  );
}

export default App;
