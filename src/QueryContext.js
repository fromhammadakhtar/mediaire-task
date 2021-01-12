import React, { createContext, useState } from 'react';
export const QueryContext = createContext();

const QueryContextProvider = (props) => {
  const [query, setQuery] = useState('top-headlines?country=us');

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {props.children}
    </QueryContext.Provider>
  );
};

export default QueryContextProvider;
