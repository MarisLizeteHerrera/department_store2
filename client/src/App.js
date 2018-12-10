import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';

const App = () => (
  <Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      {/* <Route exact path="/about" component={Departments} />
      <Route exact path="/about" component={Department} />
      <Route exact path="/about" component={DepartmentForm} /> */}
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)

export default App;
