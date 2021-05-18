import React from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import RandMContainer from '../../containers/RandMContainer';
import RandMDetail from '../../containers/RandMDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <BrowserRouter>
          <Route exact path='/' component={RandMContainer} />
          <Route path='/:id' component={RandMDetail} />
        </BrowserRouter>
      </Switch>
    </Router>
  )
}
