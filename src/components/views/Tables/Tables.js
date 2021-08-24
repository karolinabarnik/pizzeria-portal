import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './Tables.module.scss';

const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/ordering/:id`} activeClassName='active'>Ordering</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/ordering/new`} activeClassName='active'>New ordering</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'>Events</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New events</Link>
    </div>
  );
};

export default Tables;
