import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import path from './path.svg';

function NewsArticle({ data }) {
  const passData = (data) => {
    console.log(data.source.name);
  };

  return (
    <div onClick={() => passData(data)} className='card'>
      <h5>{data.publishedAt}</h5>
      <h5>{ReactHtmlParser(data.author)}</h5>
      <h5>{ReactHtmlParser(data.source.name)}</h5>
      <h5>{ReactHtmlParser(data.title)}</h5>
      <a class='inner' href={data.url}>
        <div className='Oval'>
          <img src={path} className='Arrow' alt='' />
        </div>
      </a>
    </div>
  );
}

export default NewsArticle;
