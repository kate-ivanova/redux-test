/* eslint no-unused-vars: "off" */
import React from 'react';
import FilterLink from 'containers/FilterLink';

const FiltersWidget = () => (
  <div>
    <FilterLink
      filter="all"
    >
      ALL
    </FilterLink>
    {' '}
    <FilterLink
      filter="active"
    >
      ACTIVE
    </FilterLink>
    {' '}
    <FilterLink
      filter="completed"
    >
      COMPLETED
    </FilterLink>
  </div>
);

export default FiltersWidget;
