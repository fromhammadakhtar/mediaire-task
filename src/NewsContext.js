import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { QueryContext } from './QueryContext';
export const NewsContext = createContext();

const NewsContextProvider = (props) => {
  const { query } = useContext(QueryContext);

  console.log(query);

  const initialState = {
    articles: [],
  };

  const [data, setData] = useState(initialState);
  const apiKey = 'cbb210681c3a4183b67744713e54f780';
  // const query1 = "top-headlines?country=us"
  const url = 'https://newsapi.org/v2/';

  useEffect(() => {
    axios
      .get(`${url}${query}&apiKey=${apiKey}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [query]);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
