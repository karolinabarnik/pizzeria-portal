import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/432432`} activeClassName='active'>Ordering</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New ordering</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/event/23423432`} activeClassName='active'>Events</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/event/new`} activeClassName='active'>New events</Link>
    </div>
  );
};

export default Tables;
