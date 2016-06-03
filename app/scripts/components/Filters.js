/* eslint no-unused-vars: "off" */
import React from 'react';
import FilterLink from 'containers/FilterLink';

const Filters = () => (
  <div>
    <FilterLink
      filter="ALL"
    >
      ALL
    </FilterLink>
    {' '}
    <FilterLink
      filter="ACTIVE"
    >
      ACTIVE
    </FilterLink>
    {' '}
    <FilterLink
      filter="COMPLETED"
    >
      COMPLETED
    </FilterLink>
  </div>
);

export default Filters;
