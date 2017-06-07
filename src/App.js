import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import DataTables from './components/DataTables';
import Playground from './components/Playground';

import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />

        <Route exact path="/" component={Dashboard}/>
        <Route path="/tables" component={DataTables}/>
        <Route path="/playground" component={Playground}/>

        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;
