import React, { useContext } from 'react';
import { NewsContext } from '../NewsContext';
import NewsArticle from './NewsArticle';

function News() {
  const { data } = useContext(NewsContext);

  return (
    <div>
      <div className='card-2'>
        <h5>PUBLISH DATE</h5>
        <h5>AUTHOR</h5>
        <h5>DATE</h5>
        <h5>SOURCE</h5>
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
