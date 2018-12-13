import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Departments from './components/Departments';
import DepartmentForm from './components/DepartmentForm';
import Department from './components/Department';
import ItemForm from './components/ItemForm';
import Item from './components/Item';
import NoMatch from './components/NoMatch';


const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentForm} />
        <Route exact path="/departments/:id" component={Department} />
        <Route exact path="/departments/:id/edit" component={DepartmentForm} />
        <Route exact path="/departments/:department_id/items/:id/edit" component={ItemForm} />
        <Route exact path="/departments/:department_id/items/new" component={ItemForm} />
        <Route exact path="/departments/:department_id/items/:id" component={Item} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)

export default App;
