import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NewsContextProvider from './NewsContext';
import QueryContextProvider from './QueryContext';

function App() {
  return (
    <QueryContextProvider>
      <NewsContextProvider>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </NewsContextProvider>
    </QueryContextProvider>
  );
}

export default App;
