import './App.scss';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

// import { DndProvider } from 'react-dnd'
import { DropTargetMonitor } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend'
import { Home } from './pages/Home';
import { MAppBar } from './components/MAppBar';
// import { MDragAndDrop } from './components/MDragAndDrop';
import React from 'react';

class App extends React.Component{
  state = {
    droppedFile: undefined,
  }

  handleFileDrop = (_item: any, monitor: DropTargetMonitor) => {
    const droppedFile = URL.createObjectURL(monitor.getItem().files[0]);
    this.setState({ droppedFile });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MAppBar
            menuItems={[
              { label: 'Home', path: '/' },
              { label: 'Agendar', path: '#' },
              { label: 'Agendamentos', path: '#' },
            ]}
            className="App__app-bar"
          />

          {/* <DndProvider backend={HTML5Backend}>
            <MDragAndDrop onDrop={this.handleFileDrop} />
          </DndProvider> */}

          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
