import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import Search from './Search';
import { useHistory } from 'react-router-dom';

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
      <div className='banner__search'>
        {showSearch && <Search />}
        <Button
          variant='outlined'
          className='banner__searchdates'
          onClick={() => {
            setShowSearch(!showSearch);
          }}
        >
          {!showSearch ? 'Search Dates' : 'Hide'}
        </Button>
      </div>
      {/* <h1>Shree Ganeshay Namah</h1> */}
      <div className='banner__info'>
        <h1>Get out and Stretch your imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover hidden gems near you
        </h5>
        <Button
          onClick={() => {
            history.push('/search');
          }}
          variant='outlined'
        >
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
