import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
