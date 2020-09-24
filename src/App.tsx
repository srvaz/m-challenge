import './App.scss';

import { DndProvider } from 'react-dnd'
import { DropTargetMonitor } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { MAppBar } from './components/MAppBar';
import { MDragAndDrop } from './components/MDragAndDrop';
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
      <div className="App">
        <MAppBar
          menuItems={[
            { label: 'Home', path: '#' },
            { label: 'Agendar', path: '#' },
            { label: 'Agendamentos', path: '#' },
          ]}
          className="App__app-bar"
        />

        <DndProvider backend={HTML5Backend}>
          <MDragAndDrop onDrop={this.handleFileDrop} />
        </DndProvider>
      </div>
    );
  }
}

export default App;
