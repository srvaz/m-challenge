import { BUTTON_VARIANTS, MButton } from './components/MButton';
import { MText, TEXT_VARIANT } from './components/MText';

import React from 'react';
import { faCode } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <MText
        variant={TEXT_VARIANT.TITLE}
        tag="h1"
      >
        Hello, World! <span role="img" aria-label="emoji party">🎉</span>
      </MText>
      <MButton icon={faCode} variant={BUTTON_VARIANTS.PRIMARY} />
    </div>
  );
}

export default App;
