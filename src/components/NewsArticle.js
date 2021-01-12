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

      <div style={{marginLeft:'40px'}}>
        <a href={data.url}>
          <div className='Oval'>
            <img src={path} className='Arrow' />
          </div>
        </a>
      </div>
    </div>
  );
}

export default NewsArticle;
