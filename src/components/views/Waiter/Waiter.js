import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Waiter.module.scss';

const Waiter = () => (
  <div className={styles.component}>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active'>New order</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`} activeClassName='active'>Orders</Link>
    <h2>Waiter view</h2>
  </div>
);

export default Waiter;
