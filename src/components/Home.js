import News from './News';
import React, { useContext } from 'react';
import { QueryContext } from '../QueryContext';
import SearchContainer from './Search';

const Home = () => {
  const { setQuery } = useContext(QueryContext);

  const search = (e) => {
    var results = [];
    var txt = e.target.value.toLowerCase();
    console.log(txt);

    if (txt === '') {
      setQuery('top-headlines?country=us');
      return;
    }
    setQuery(`everything?q=${txt}`);
  };

  return (
    <div>
      <SearchContainer search={search}></SearchContainer>
      <News />
    </div>
  );
};

export default Home;
