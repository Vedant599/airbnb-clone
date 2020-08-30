import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchPage from './components/pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={SearchPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
