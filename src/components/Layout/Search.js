import React, { useState } from 'react';
import './Search.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import PeopleIcon from '@material-ui/icons/People';
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
function Search() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className='search'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h3>
        NO. of People <PeopleIcon />
      </h3>
      <input
        type='number'
        name='no_of_people'
        id='no_of_people'
        defaultValue={2}
        min={0}
      />

      <Button onClick={() =>{history.push('/search')}}>
        <span>Search Airbnb</span>
      </Button>
    </div>
  );
}

export default Search;
