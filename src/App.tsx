import { MText, TEXT_VARIANT } from './components/MText';

import React from 'react';

function App() {
  return (
    <div className="App">
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
