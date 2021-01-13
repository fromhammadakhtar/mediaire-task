import React, { useContext } from 'react';
import { NewsContext } from '../NewsContext';
import NewsArticle from './NewsArticle';
import SearchContainer from './Search';
import { QueryContext } from '../QueryContext';

function News() {
  const { data } = useContext(NewsContext);

  const { setQuery } = useContext(QueryContext);

  const search = (e) => {
    var txt = e.target.value.toLowerCase();
    console.log(txt);

    if (txt === '') {
      setQuery('top-headlines?country=us');
      return;
    }
    setQuery(`everything?q=${txt}`);
  };


  return (
    <div style={{marginTop:'5rem'}}>
      <div className='card-2'>
        <h5></h5>
        <h5></h5>
        <h5></h5>
        <h5></h5>
        <SearchContainer search={search}></SearchContainer>
      </div>
      <div className='card-2'>
        <h5>PUBLISH DATE</h5>
        <h5>AUTHOR</h5>
        <h5>SOURCE</h5>
        <h5>TITLE</h5>
        <h5></h5>
      </div>
      {data
        ? data.articles.map((news) => (
            <NewsArticle data={news} key={news.url} />
          ))
        : 'Loading'}
    </div>
  );
}

export default News;
