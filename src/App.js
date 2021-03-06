import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import Order from './components/views/Order/Order';
import Homepage  from './components/views/Homepage/Homepage';
import {BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL  + '/tables/booking/new'} component={Booking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/event/new'} component={Event} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={Event} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={Order} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={Order} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
