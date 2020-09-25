import React, { Suspense, lazy } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { MAppBar } from './components/MAppBar';

class App extends React.Component{
  state = {
    droppedFile: undefined,
  }

  render() {
    import('./App.scss');
    const Home = lazy(() => import('./pages/Home'));
    const Scheduling = lazy(() => import('./pages/Scheduling'));


    return (
      <Router>
        <div className="App">
          <MAppBar
            menuItems={[
              { label: 'Home', path: '/' },
              { label: 'Agendar', path: '/scheduling' },
              { label: 'Agendamentos', path: '#' },
            ]}
            className="App__app-bar"
          />
          <Suspense fallback={<p>Carregando...</p>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/scheduling" component={Scheduling} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default App;
